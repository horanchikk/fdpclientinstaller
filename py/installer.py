# Import libs
from sys import platform, argv
from shutil import move, copy
from os import makedirs, system, getenv, remove

# Configuration
try:
    move("fdp.jar", "py/fdp.jar")
except:
    pass
mode = argv[1]

if platform == "linux" or platform == "linux2":
    if mode == "forge":
        move("py/fdp.jar", getenv('HOME') + "/.minecraft/mods")
    elif mode == "nonforge":
        move("py/fdp.jar", getenv('HOME') + "/.minecraft/mods")
        makedirs(getenv('HOME') + "/.minecraft/versions/FdpClient")
        copy("py/FdpClient.json", getenv('HOME') + "/.minecraft/versions/FdpClient/FdpClient.json")
elif platform == "win32":
    if mode == "forge":
        try:
            move("py/fdp.jar", getenv('APPDATA') + "/.minecraft/mods")
        except:
            move("py/fdp.jar", getenv('APPDATA') + "/.minecraft/mods")
    if mode == "nonforge":
        try:
            move("py/fdp.jar", getenv('APPDATA') + "/.minecraft/mods")
            makedirs(getenv('APPDATA') + "/.minecraft/versions/FdpClient")
            copy("py/FdpClient.json", getenv('APPDATA') + "/.minecraft/versions/FdpClient/FdpClient.json")
        except:
            move("py/fdp.jar", getenv('APPDATA') + "/.minecraft/mods")
            makedirs(getenv('APPDATA') + "/.minecraft/versions/FdpClient")
            copy("py/FdpClient.json", getenv('APPDATA') + "/.minecraft/versions/FdpClient/FdpClient.json")
elif platform == "darwin":
    pass #TODO: OS X SUPPORT

print('Installed')
