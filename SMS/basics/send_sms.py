"""
Send SMS via Twilio

HOW TO RUN!

python3 send_sms.py "<message to send>"

"""
import sys
from twilio.rest import Client

account_sid = 'AC990674b9094ad313e9f353f6454f66c7'
auth_token = '14452b21905a049c3f67340221d38159'

def send_sms(_to, _msg):
    client = Client(account_sid, auth_token)
    message = client.messages.create(
        to=_to,
        from_="+15615670440",
        body=_msg
    )
    print(message)
    print("Message SID: {}".format(message.sid))


def main():
    to_list = ["+27764679922", "+27843412465", "+27662296705"]
    for t in to_list:
        send_sms(t, sys.argv[1])


if __name__ == "__main__":
    main()