import os
import shutil
import hashlib
import requests
import toml
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

# Retrieve the CurseForge API key from the environment variables
curseforge_api_key = os.getenv("CFAPI")


# Function to calculate the SHA-1 hash of a file
def calculate_sha1_hash(file_path):
	sha1_hash = hashlib.sha1()
	with open(file_path, "rb") as f:
		while True:
			data = f.read(65536)  # Read in 64k chunks
			if not data:
				break
			sha1_hash.update(data)
	return sha1_hash.hexdigest()

# Function to get CurseForge file and project IDs
def get_curseforge_ids(api_key, mod_file_path):
	mod_hash = calculate_sha1_hash(mod_file_path)
	url = f"https://addons-ecs.forgesvc.net/api/v2/addon/{mod_hash}"

	headers = {
		"User-Agent": "Your User Agent Here",  # Replace with your user agent
		"X-API-Key": api_key,  # Replace with your CurseForge API key
	}

	try:
		response = requests.get(url, headers=headers)
		if response.status_code == 200:
			data = response.json()
			file_id = data["id"]
			project_id = data["projectId"]
			return file_id, project_id
		else:
			print(f"Failed to fetch CurseForge data for {mod_file_path}")
	except Exception as e:
		print(f"Error fetching data from CurseForge: {e}")

	return None, None

# Function to create a .pw.toml file
def create_mod_toml(mod_name, mod_filename, mod_hash, file_id, project_id):
	toml_content = {
		"name": mod_name,
		"filename": mod_filename,
		"side": "both",
		"download": {
			"mode": "metadata:curseforge",
			"hash-format": "sha1",
			"hash": mod_hash
		},
		"update": {
			"curseforge": {
				"file-id": file_id,
				"project-id": project_id
			}
		}
	}

	return toml_content

# Function to process mod files and generate .pw.toml files
def process_mods(mod_directory, api_key):
	print("Loading modpack...")
	# Load modpack and index here (similar to the Go code)

	# Create a directory for converted .pw.toml files
	converted_mods_directory = "converted_mods"
	os.makedirs(converted_mods_directory, exist_ok=True)

	# Walk files in the mods folder
	for root, _, files in os.walk(mod_directory):
		for file in files:
			if file.endswith((".jar", ".litemod")):
				mod_file_path = os.path.join(root, file)
				print("Hashing " + mod_file_path)
				mod_hash = calculate_sha1_hash(mod_file_path)

				# Get CurseForge file and project IDs
				file_id, project_id = get_curseforge_ids(api_key, mod_file_path)

				if file_id is not None and project_id is not None:
					# Create .pw.toml content
					mod_name = os.path.splitext(os.path.basename(mod_file_path))[0]
					toml_content = create_mod_toml(mod_name, file, mod_hash, file_id, project_id)

					# Write .pw.toml file
					toml_filename = os.path.splitext(file)[0] + ".pw.toml"
					toml_filepath = os.path.join(converted_mods_directory, toml_filename)
					with open(toml_filepath, 'w') as toml_file:
						toml.dump(toml_content, toml_file)

					# Optionally, remove the original mod file
					# os.remove(mod_file_path)
	

def main():
	mod_directory = "../mods"

	try:
		process_mods(mod_directory, curseforge_api_key)
		print("Detection and conversion complete!")
	except Exception as e:
		print(f"Error: {e}")

if __name__ == "__main__":
	main()
