const { App } = require('@slack/bolt');
const newHere = require('./components/newHere');
const joinProduct = require('./components/joinProductProgram');
const joinBackend = require('./components/joinBackend');
const joinFrontend = require('./components/joinFrontend');
const dataScience = require('./components/joinDataScience');
const joinDesign = require('./components/designLab');
const technicalWriting = require('./components/technicalWriting');
const welcomeNewMember = require('./components/welcomeMember');

const dotenv = require('dotenv');
dotenv.config();

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  port: process.env.PORT || 3000,
});

// ********************************NEWBIES*********/

app.message(/hello|hey|hi/i, async ({ message, say }) => {
  await say(`Hello there <@${message.user}>!`);
});

// ******** Bot responds to a member in DM when the member types  a text that contains new here*******/
app.message(/new(?=\s+here)/i, async ({ message, client }) => {
  newHere.newMember(message, client);
});

// ******* Bot welcomes a member to a specified channel*****/

app.event('member_joined_channel', async ({ event, client }) => {
  console.log(event.channel);
  if (event.channel === 'CSGTHDWE6') {
    joinProduct.productProgram(event, client);
  } else if (event.channel === 'CSWU5TW14') {
    joinBackend.backendChannel(event, client);
  } else if (event.channel === 'CSH8ASTV1') {
    joinFrontend.frontendChannel(event, client);
  } else if (event.channel === 'CSUNEFV29') {
    dataScience.dataScienceChannel(event, client);
  } else if (event.channel === 'CSFUFQ1HQ') {
    joinDesign.designChannel(event, client);
  } else if (event.channel === 'C01G756UCF6') {
    technicalWriting.technicalWritingChannel(event, client);
  }
});
// ****Bot welcomes new member to SheCodeAfrica in DM*/
app.event('team_join', async ({ event, client }) => {
  welcomeNewMember.newMember(event, client);
});

/******* */
app.message(/test|testing/i, async ({ message, say }) => {
  await say({
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `Hey <@${message.user}>,\n Welcome to the *She Code Africa Community* !🎉\n She Code Africa is a non-profit organization aimed at celebrating, and empowering women in technology in Africa. With over 15,000 women in this community, and several chapters spread across Africa, our aim is to provide a safe space where women like you can network, learn and grow in your respective tech fields.
          `,
        },
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `Here are the things you need to do to fully confirm your membership:\n
               • Update your profile with a picture of you and what you do, so as to help others\n
               \tput a face to your name and prove your authenticity in the community. \n
               • Make an intro of yourself in the #introductions channel (with format stated on \n
                \tguideline) so others can meet you  and possibly connect.\n
               • Join any of these technical channels in order to learn and grow with other
                 women in your field:
                            \t\t ❇️ #product-project-program-mgt\n
                            \t\t ❇️ #backend-development\n
                            \t\t ❇️ #datascience-ml-ai\n
                            \t\t ❇️ #design-lab\n
                            \t\t ❇️ #frontend-development\n
                            \t\t ❇️ #mobile-development\n
                          `,
        },
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `
            Take a minute to go through our community guidelines, *<https://docs.google.com/document/d/1BLlNrokijCqnl5_-C-wUwKkePma-qLw4zwhdzE--VqQ/edit?usp=sharing|here>*, to better understand
            how to access each learning channel and our rules against spam posts/
            cross posting/ irrelevant posts. Feel free to reach out to the community managers,
            <#D03961HLBTN>  or <#D03NKPB2BRU> if you have any questions.

            We are super excited that you've chosen to be a part of our community!
            You're welcome again to the SCA community, and I hope you have an amazing
            experience.

          `,
        },
      },
    ],
    text: `Welcome to the team, <@${message.user}>! 🎉 You can introduce yourself in this channel.`,
  });
});

//

// // *****************PROJECTBOT CHANNEL FOR TESTING****************************/

//

// //****************************************** */

//  When a user joins the team, the bot sends a DM to the newcommer asking them how they would like to contribute
/*
app.event('team_join', async ({ event, client, logger }) => {
  try {
    const result = await client.chat.postMessage({
      channel: event.user.id,
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `Hey <@${event.user.id}>,\n Welcome to the *She Code Africa Community* !🎉\n She Code Africa is a non-profit organization aimed at celebrating, and empowering women in technology in Africa. With over 15,000 women in this community, and several chapters spread across Africa, our aim is to provide a safe space where women like you can network, learn and grow in your respective tech fields.
            `,
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `Here are the things you need to do to fully confirm your membership:\n
                 • Update your profile with a picture of you and what you do, so as to help others put a face to your name and prove your authenticity in the community. \n
                 • Make an intro of yourself in the #introductions channel (with format stated on guideline) so others can meet you  and possibly connect.\n
                 • Join any of these technical channels in order to learn and grow with other women in your field
                    \t\t ❇️ <#C03N8QPL7FZ>\n
                    \t\t ❇️ <#C03N8QPL7FZ>\n
                    \t\t ❇️ <#C03N8QPL7FZ>\n
              \n \n
              Take a minute to go through our community guidelines, here, to better understand how to access each learning channel and our rules against spam posts/cross posting/irrelevant posts. Feel free to reach out to the community managers, <#D03961HLBTN>  or <@amarachukwu> if you have any questions.



            `,
          },
        },
      ],
      text: `Welcome to the team, <@${event.user.id}>! 🎉.`,
    });
    logger.info(result);
  } catch (error) {
    logger.error(error);
  }
});
*/
// handle the button click and show the responses

// this handler is for the nested radio buttons above

// //*************************************************************** */

// // *************Send message about outreachy**********/
// app.message(/outreachy/i, async ({ message, say, logger }) => {
//   try {
//     const result = await say({
//       channel: message.user,
//       blocks: [
//         {
//           type: 'section',
//           text: {
//             type: 'mrkdwn',
//             text: `Hello <@${message.user}>! 🎉, Thanks so much for your interest in CHAOSS too! As many of you know, we have two potential projects and but funding for only one person. You can find the projects at:\n
//             <https://www.outreachy.org/apply/project-selection/#chaoss>
//             We spent some time to consolidate questions and answers for you. In response, we have made two very clear issues to demonstrate what we would like from you to help us better understand and gauge your interest. You can find them in the following issues:\n
//             <https://github.com/chaoss/community/issues/312> (Conversion Rate)\n
//             <https://github.com/chaoss/community/issues/311> (Documentation Inclusivity)`,
//           },
//         },
//       ],
//       text: `Welcome to the team, <@${message.user}>! 🎉.`,
//     });
//     logger.info(result);
//   } catch (error) {
//     logger.error(error);
//   }
// });

//******************************************************* */
// app.message(/hello|hey|hi/i, async ({ message, say }) => {
//   await say(`Hello there <@${message.user}>!`);
// });

// welcomes a new member to the newcomer channel
/*const channelId = 'C03D3L8TNMDoo'; //for testing purposes it welcomes to #projectbot channel

// When a user joins the team, send a message in a predefined channel asking them to introduce themselves
app.event('team_join', async ({ event, client, logger }) => {
  try {
    const result = await client.chat.postMessage({
      channel: channelId,
      text: `Welcome to the team, <@${event.user.id}>! 🎉 You can introduce yourself in this channel.`,
    });
    logger.info(result);
  } catch (error) {
    logger.error(error);
  }
});
*/
// *************************************** DIRECT MESSAGE - ONE TIME  ANNOUNCEMENT TO INTRODUCE THE BOT************/
/*
let usersStore = {};

app.message('intro-CHAOSS', async ({ client, logger }) => {
  // Call the users.list method using the WebClient
  const result = await client.users.list();
  saveUsers(result.members);
  try {
    for (let i = 0; i < userId.length; i++) {
      await client.chat.postMessage({
        channel: userId[i],
        text: `Hello, I'm CHAOSS BOT! I am a simple bot. I am here to welcome newcomers. If you need more information about CHAOSS, you can type in 'newbie' in the <#C0207C3RETX> channel and I will show you around.`,
      });
    }
  } catch (error) {
    logger.error(error);
  }
});

// Put users into the JavaScript object
let userId = [];

function saveUsers(usersArray) {
  usersArray.forEach(function (user) {
    // Key user info on their unique user ID
    userId.push(user['id']);

    // Store the entire user object (you may not need all of the info)
    usersStore[userId] = user;
    // console.log(userId);
  });
}
*/
//************ */
(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();
