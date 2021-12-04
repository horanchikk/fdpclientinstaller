# Import libs
from os import remove, getenv
from shutil import rmtree
from sys import platform

if platform == "linux" or platform == "linux2":
    remove(getenv('HOME') + "\\.minecraft\\mods\\fdp.jar")
    print("uninstalled")
    try:
        rmtree(getenv('HOME') + "\\.minecraft\\versions\\FdpClient")
    except:
        pass
elif platform == "win32":
    remove(getenv('APPDATA') + "\\.minecraft\\mods\\fdp.jar")
    print("uninstalled")
    try:
        rmtree(getenv('APPDATA') + "\\.minecraft\\versions\\FdpClient")
    except:
        pass
elif platform == "darwin":
    pass #TODO: OS X SUPPORT