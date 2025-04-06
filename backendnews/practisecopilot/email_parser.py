# this file will handle the passing of the email from file

import email
from email import policy
from email.parser import BytesParser

def parse_email(raw_email): 
   """
   Parse and email file and print its headers and body 
   args:
       raw_email (str): The raw email content as a string.
   """
   with open(raw_email, 'r') as f:
       email_data = f.read()
   # Parse the email
   msg = email.message_from_string(email_data)
   # Print the email headers
   print("From: ", msg["From"])
   print("To: ", msg["To"])
   print("Subject: ", msg["Subject"])
   print("Date: ", msg["Date"])
   # Print the email body
   if msg.is_multipart():
       for part in msg.walk():
           if part.get_content_type() == "text/plain":
               body = part.get_payload(decode=True).decode()
               print("Body: ", body)
   else:
       body = msg.get_payload(decode=True).decode()
       print("Body: ", body)
parse_email("email.txt")