//import express & body-parser & discord-webhook-node
const express = require('express');
const bodyParser = require('body-parser');
const { Webhook, MessageBuilder } = require('discord-webhook-node');
const config = require('./config');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const hook = new Webhook(config.webhook);

app.post('/recieve_github', (req, res) => {
    const embed = new MessageBuilder()
    .setTitle(`${req.body.repository.name}`)
    .setAuthor(`${req.body.sender.login}`, `${req.body.sender.avatar_url}`, `${req.body.sender.html_url}`)
    .setURL(`${req.body.repository.html_url}`)
    .setColor('#00b0f4')
    .setTimestamp();
    for (let i in req.body.commits) {
        embed.addField(`**START OF COMMIT**`, '`' + req.body.commits[i].message + '` \n **END OF COMMIT**')
    }
    hook.send(embed);
});

app.listen(config.port, function () {
    console.log('listening on port ' + config.port);
});
