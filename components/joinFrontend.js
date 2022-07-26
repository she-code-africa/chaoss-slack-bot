const { App } = require('@slack/bolt');

const testChannel = 'CSH8ASTV1';

async function frontendChannel(message, client) {
  try {
    return await client.chat.postMessage({
      channel: message.user,

      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `Hello<@${message.user}> :wave:`,
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: ' We are happy that you chose to join the frontend channel. ',
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: " Do not hesitate to drop your frontend related questions on the channel and someone would definitely assist. Remember to also network with other members of the channel as we're all here to learn. ",
          },
        },
      ],

      text: `Welcome to the Frontend Channel <@${message.user}>! 🎉.`,
    });
  } catch (error) {
    console.log(error);
  }
}

exports.frontendChannel = frontendChannel;
