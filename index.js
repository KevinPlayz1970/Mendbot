const Discord = require('discord.js')
const client = new Discord.Client({
	allowedMentions: {
		parse: ['users'],
		repliedUser: true,
	},
	intents: [
		"GUILDS",
		"GUILD_MESSAGES",
		"GUILD_PRESENCES",
		"GUILD_MEMBERS",
		"GUILD_MESSAGE_REACTIONS"
	],
});
const config = require("./config.js");
console.log(config.token)


client.login(config.token);
sayCMD = ""

client.on("ready", () =>{
	console.log("Bot started up.")
})

client.on("messageCreate", async messageCreate => {
	if (messageCreate.author.bot) return;

	if (messageCreate.content.startsWith('!say')){
		sayCMD = messageCreate.content.slice(4)
		messageCreate.channel.send(sayCMD)
	}
	if (messageCreate.author.id === "314197872209821699"){
		var randomNum = Math.floor(Math.random() * (10));
		if (randomNum === 4){
			messageCreate.channel.send("rat")
		}
		if (randomNum === 5){
			messageCreate.channel.send("rat")
		}
	}
	if (messageCreate.content === "!shutdown"){
		if (messageCreate.author.id === "626401322542956546"){
			messageCreate.channel.send(":warning: Shutting Down...")
			setTimeout(() => {client.destroy();}, 2000)
		}
	}
	if (messageCreate.content.startsWith("!kick")){
		if (messageCreate.author.id === "626401322542956546"){
			var member = messageCreate.mentions.members.first();

			member.kick()
			messageCreate.channel.send(":wave: " + member.displayName + "has been kicked")
		}
	}
	if (messageCreate.content.startsWith("!ban")){
		if (messageCreate.author.id === "626401322542956546"){
			var member = messageCreate.mentions.members.first();

			member.ban()
			messageCreate.channel.send(":wave: " + member.displayName + "has been banned")
		}
	}
	if (messageCreate.content.startsWith("!clear")){
		num = messageCreate.content.slice(6)
		parseInt(num)

		messageCreate.channel.bulkDelete(num)
		.then(messages => {messageCreate.channel.send(`** \`${messages.size}/${num}\` messages deleted successfully** `)})
	}
	if (messageCreate.content === "!joke"){
		var rngJoke = Math.floor(Math.random() * (21)) + 1;
		if (rngJoke === 1){
		messageCreate.channel.send("Why can't a bicycle stand on its own? It's two-tired.")
		}
		if (rngJoke === 2){
		messageCreate.channel.send("Found out I was color blind the other day. That one came right out of the orange.")
		}
		if (rngJoke === 3){
		messageCreate.channel.send("What did the grape say when it was stepped on? Nothing, it just let out a little wine.")
		}
		if (rngJoke === 4){
		messageCreate.channel.send("Why can't you play poker on the African Savanna? There's too many cheetahs.")
		}
		if (rngJoke === 5){
		messageCreate.channel.send("To the guy who invented zero: Thanks for nothing!")
		}
		if (rngJoke === 6){
		messageCreate.channel.send("What do a tick and the Eiffel Tower have in common? They're both Paris sites.")
		}
		if (rngJoke === 7){
		messageCreate.channel.send("What's more amazing than a talking dog? A spelling bee.")
		}
		if (rngJoke === 8){
		messageCreate.channel.send("Once you've seen one shopping center, you've seen the mall.")
		}
		if (rngJoke === 9){
		messageCreate.channel.send("I'm reading a book about anti-gravity. I can't put it down.")
		}
		if (rngJoke === 10){
		messageCreate.channel.send("I'm thinking of reasons to go to Switzerland. The flag is a big plus.")
		}
		if (rngJoke === 11){
		messageCreate.channel.send("Why do seagulls live by the sea? ||Cause if they lived by the bay, they'd be bagels.||")
		}
		if (rngJoke === 12){
		messageCreate.channel.send("How did Darth Vader know what Luke Skywalker was getting for Christmas? ||He felt his presence.||")
		}
		if (rngJoke === 13){
		messageCreate.channel.send("If the mushroom was such a fun-guy why didn't they have the party at his house? ||There wasn't much-room.||")
		}
		if (rngJoke === 14){
		messageCreate.channel.send("What do you get if you drop a piano down a mineshaft? ||A flat miner.||")
		}
		if (rngJoke === 15){
		messageCreate.channel.send("A horse walks into a bar. Hey, says the barman. Yes please, says the horse.")
		}
		if (rngJoke === 16){
		messageCreate.channel.send("A horse walks into a bar. The bartender asked him, Why the long face?")
		}
		if (rngJoke === 17){
		messageCreate.channel.send("A horse walks into a bar and the bartender says, Why the long face? ||And the horse says, I'm finally realizing that my alcoholism is driving my family apart.||")
		}
		if (rngJoke === 18){
		messageCreate.channel.send("Why was the broom late for work? ||It overswept||")
		}
		if (rngJoke === 19){
		messageCreate.channel.send("Which side of the chicken has more feathers? ||The outside||")
		}
		if (rngJoke === 20){
		messageCreate.channel.send("What are the strongest days of the week? ||Saturday and Sunday. All the rest are weak-days.||")
		}
		if (rngJoke === 21){
		messageCreate.channel.send("The past, present, and future walk into a bar. It was tense.")
		}
	}
})