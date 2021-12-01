import shutil, os, time, sys
from sys import platform

mode = sys.argv[1]

time.sleep(3)

if platform == "linux" or platform == "linux2":
    if mode == "forge":
        try:
            shutil.move("fdp.jar", os.getenv('HOME') + "/.minecraft/mods")
        except:
            os.remove(os.getenv('HOME') + "/.minecraft/mods/fdp.jar")
            shutil.move(".fdp.jar", os.getenv('HOME') + "/.minecraft/mods")
    elif mode == "nonforge":
        try:
            shutil.move("fdp.jar", os.getenv('HOME') + "/.minecraft/mods")
            os.makedirs(os.getenv('HOME') + "/.minecraft/versions/1.8.9-forge1.8.9-11.15.1.2318-1.8.9")
            shutil.move("1.8.9-forge1.8.9-11.15.1.2318-1.8.9.json", os.getenv('HOME') + "/.minecraft/versions/1.8.9-forge1.8.9-11.15.1.2318-1.8.9/1.8.9-forge1.8.9-11.15.1.2318-1.8.9.json")
        except:
            os.remove(os.getenv('HOME') + "/.minecraft/mods/fdp.jar")
            shutil.move("fdp.jar", os.getenv('HOME') + ".minecraft/mods")
            os.makedirs(os.getenv('HOME') + "/.minecraft/versions/1.8.9-forge1.8.9-11.15.1.2318-1.8.9")
            shutil.move("1.8.9-forge1.8.9-11.15.1.2318-1.8.9.json", os.getenv('HOME') + "/.minecraft/versions/1.8.9-forge1.8.9-11.15.1.2318-1.8.9/1.8.9-forge1.8.9-11.15.1.2318-1.8.9.json")
elif platform == "win32":
    if mode == "forge":
        try:
            shutil.move("fdp.jar", os.getenv('APPDATA') + "/.minecraft/mods")
        except:
            os.remove(os.getenv('APPDATA') + "/.minecraft/mods/fdp.jar")
            shutil.move("fdp.jar", os.getenv('APPDATA') + "/.minecraft/mods")
    if mode == "nonforge":
        try:
            shutil.move("fdp.jar", os.getenv('APPDATA') + "/.minecraft/mods")
            os.makedirs(os.getenv('APPDATA') + "/.minecraft/versions/1.8.9-forge1.8.9-11.15.1.2318-1.8.9")
            shutil.move("1.8.9-forge1.8.9-11.15.1.2318-1.8.9.json", os.getenv('APPDATA') + "/.minecraft/versions/1.8.9-forge1.8.9-11.15.1.2318-1.8.9/1.8.9-forge1.8.9-11.15.1.2318-1.8.9.json")
        except:
            shutil.move("fdp.jar", os.getenv('APPDATA') + "/.minecraft/mods")
            os.makedirs(os.getenv('APPDATA') + "/.minecraft/versions/1.8.9-forge1.8.9-11.15.1.2318-1.8.9")
            shutil.move("1.8.9-forge1.8.9-11.15.1.2318-1.8.9.json", os.getenv('APPDATA') + "/.minecraft/versions/1.8.9-forge1.8.9-11.15.1.2318-1.8.9/1.8.9-forge1.8.9-11.15.1.2318-1.8.9.json")
elif platform == "darwin":
    pass #TODO: OS X SUPPORT

print('Installed')