const { App } = require('@slack/bolt');

const channelId = 'CSUNEFV29';

async function dataScienceChannel(message, client) {
  try {
    return await client.chat.postMessage({
      channel: message.user,

      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `Hello <@${message.user}>  :wave:`,
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: 'We are happy that you chose to join the datascience-ml-ai channel.',
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: "If you're new to Data Science, Machine Language or Artificial Intelligence , we have a study guide that you can use to learn at your own pace.",
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `In case you need more clarification, feel free to reach out to the channel lead *@BukolaBusiga*  or the channel co-lead *@hemhemoh*`,
          },
        },
      ],

      text: `Welcome to the DataScience Track, <@${message.user}>! 🎉.`,
    });
  } catch (error) {
    console.log(error);
  }
}

exports.dataScienceChannel = dataScienceChannel;
