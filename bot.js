const _access_key =
  "ODQ0OTIwODM5MTU3NDQ4NzE0.YKZb2Q.wyXIsI5Q798OCsyg0z5-J8Qtpbs";

// Extract the required classes from the discord.js module
const { Client, Attachment } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("노는게 제일 좋아", { type: "PLAYING" });
});

client.on("message", (msg) => {
  if (msg.content.startsWith("m.help")) {
    msg.reply("Made by devprkms");
  }

  if (msg.content === "m.whoami") {
    msg.reply("https://devprkms.github.io/portfolio");
  }
});

client.login(_access_key);
