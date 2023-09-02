import shutil
import subprocess
import os

# Define source and destination directories
source_dir = os.path.abspath("../mods")  # Use absolute path
destination_dir = os.path.abspath("../cpy_mods")  # Use absolute path

# Task 1: Copy a directory
shutil.copytree(source_dir, destination_dir)

# Task 2: Run a command on the non-copy directory
command = "packwiz curseforge detect"  # Replace with the command you want to run
subprocess.run(command, shell=True, cwd="../")

# Task 3: Move all files from the copy directory to the non-copy directory
for root, _, files in os.walk(destination_dir):
    for file in files:
        source_file = os.path.join(root, file)
        destination_file = os.path.join(source_dir, file)
        shutil.move(source_file, destination_file)

# Task 4: Delete the copy directory
shutil.rmtree(destination_dir)

print("Tasks completed successfully.")
