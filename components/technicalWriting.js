const { App } = require('@slack/bolt');

const channelId = 'C01G756UCF6';

async function technicalWritingChannel(message, client) {
  try {
    return await client.chat.postMessage({
      channel: message.user,

      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `Hello <@${message.user}> :wave:`,
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: ' We are happy that you chose to join the technical writing channel. ',
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: ` If you're new to technical writing, we have a study guide that you can use to learn at your own pace.`,
          },
        },
        // {
        //   type: 'section',
        //   text: {
        //     type: 'mrkdwn',
        //     text: ` In case you need more clarification, feel free to reach out to the channel lead...`,
        //   },
        // },
      ],

      text: `Welcome to the Technical writing Channel <@${message.user}>! 🎉.`,
    });
  } catch (error) {
    console.log(error);
  }
}

exports.technicalWritingChannel = technicalWritingChannel;
