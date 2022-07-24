const { App } = require('@slack/bolt');

async function newMember(event, client) {
  try {
    return await client.chat.postMessage({
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
                   • Update your profile with a picture of you and what you do, so as to help others\n
                   \tput a face to your name and prove your authenticity in the community. \n
                   • Make an intro of yourself in the #introduction channel (with format stated on \n
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
                *@omotola*  or *@amarachukwu* if you have any questions.

                We are super excited that you've chosen to be a part of our community!
                You're welcome again to the SCA community, and I hope you have an amazing
                experience.

              `,
          },
        },
      ],
      text: `Welcome to the team, <@${event.user.id}>! 🎉 You can introduce yourself in this channel.`,
    });
  } catch (error) {
    console.log(error);
  }
}

exports.newMember = newMember;
