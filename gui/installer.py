import shutil, os, time, sys
from sys import platform

mode = sys.argv[1]

time.sleep(3)

if platform == "linux" or platform == "linux2":
    if mode == "forge":
        try:
            shutil.move("fdp.jar", os.getenv('HOME') + "/.minecraft/mods")
        except:
            shutil.move(".fdp.jar", os.getenv('HOME') + "/.minecraft/mods")
    elif mode == "nonforge":
        try:
            shutil.move("fdp.jar", os.getenv('HOME') + "/.minecraft/mods")
            os.makedirs(os.getenv('HOME') + "/.minecraft/versions/FdpClient")
            shutil.move("FdpClient.json", os.getenv('HOME') + "/.minecraft/versions/FdpClient/FdpClient.json")
        except:
            shutil.move("fdp.jar", os.getenv('HOME') + ".minecraft/mods")
            os.makedirs(os.getenv('HOME') + "/.minecraft/versions/FdpClient")
            shutil.move("FdpClient.json", os.getenv('HOME') + "/.minecraft/versions/FdpClient/FdpClient.json")
elif platform == "win32":
    if mode == "forge":
        try:
            shutil.move("fdp.jar", os.getenv('APPDATA') + "/.minecraft/mods")
        except:
            shutil.move("fdp.jar", os.getenv('APPDATA') + "/.minecraft/mods")
    if mode == "nonforge":
        try:
            shutil.move("fdp.jar", os.getenv('APPDATA') + "/.minecraft/mods")
            os.makedirs(os.getenv('APPDATA') + "/.minecraft/versions/FdpClient")
            shutil.move("FdpClient.json", os.getenv('APPDATA') + "/.minecraft/versions/FdpClient/FdpClient.json")
        except:
            shutil.move("fdp.jar", os.getenv('APPDATA') + "/.minecraft/mods")
            os.makedirs(os.getenv('APPDATA') + "/.minecraft/versions/FdpClient")
            shutil.move("FdpClient.json", os.getenv('APPDATA') + "/.minecraft/versions/FdpClient/FdpClient.json")
elif platform == "darwin":
    pass #TODO: OS X SUPPORT

print('Installed')