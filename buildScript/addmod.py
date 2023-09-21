import shutil
import subprocess
import os

source_dir = os.path.abspath("./mods")
destination_dir = os.path.abspath("./cpy_mods")

shutil.copytree(source_dir, destination_dir)

command = "packwiz curseforge detect"
subprocess.run(command, shell=True, cwd="../")

file_extension = '.jar'

for root, _, files in os.walk(destination_dir):
    for file in files:
        source_file = os.path.join(root, file)
        destination_file = os.path.join(source_dir, file)
        shutil.move(source_file, destination_file)
            
shutil.rmtree(destination_dir)

print("Tasks completed successfully.")
