import sys, time, os
from sys import platform

time.sleep(3)

if platform == "linux" or platform == "linux2":
    os.remove(os.getenv('HOME') + "/.minecraft/mods/fdp.jar")
elif platform == "win32":
    os.remove(os.getenv('APPDATA') + "/.minecraft/mods/fdp.jar")
elif platform == "darwin":
    pass #TODO: OS X SUPPORT

print("File downloaded")