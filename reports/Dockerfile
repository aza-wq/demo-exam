FROM selenium/standalone-chrome-debug

WORKDIR /home/demo-ui
ADD . /home/demo-ui/
RUN sudo sed -i 's/\r$//' launch.sh
RUN sudo apt-get update
RUN curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
RUN sudo apt-get install -y nodejs
RUN echo 'Node: ' $(node -v)
RUN sudo rm -rf node_modules package-lock.json
RUN sudo npm install --unsafe-perm=true --allow-root
RUN echo 'Chrome: ' $(google-chrome --version)
RUN echo 'ChromeDriver: ' $(./node_modules/.bin/chromedriver -v)
RUN sudo sed -i 's/MinProtocol = TLSv1.2/MinProtocol = TLSv1/g' /etc/ssl/openssl.cnf
RUN sudo sed -i 's/MinProtocol = TLSv1.2/MinProtocol = TLSv1/g' /usr/lib/ssl/openssl.cnf
EXPOSE 9515

ENTRYPOINT [ "sudo", "-E", "bash","-c", "/bin/bash launch.sh" ]