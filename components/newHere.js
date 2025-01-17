const { App } = require('@slack/bolt');

async function newMember(message, client) {
  try {
    if (message.channel !== 'C03CSUSNDNJ') {
      console.log(message);
      return await client.chat.postMessage({
        channel: message.user,

        blocks: [
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `Hello<@${message.user}>! :wave:`,
            },
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: ` Welcome to She Code Africa Community. Please go ahead and make an introduction in the #introduction channel \n Clueless on where to start? Do check out our *<https://docs.google.com/document/d/1BLlNrokijCqnl5_-C-wUwKkePma-qLw4zwhdzE--VqQ/edit?usp=sharing|community guidelines>*. Our Community Managers *@Omotola* and *@Amarachukwu* are only a DM away If you have any questions.`,
            },
          },
        ],
        text: `Welcome to SheCodeAfrica, <@${message.user}>! 🎉.`,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

exports.newMember = newMember;
