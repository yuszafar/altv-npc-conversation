# atlv-npc-conversation

# Install
To install this script, just install it in the `resources` folder of your server and register it in your `config` file.

# Example
## Example 1 - James
James has static answers:

<img src="https://i.imgur.com/nVazNSE.jpg" alt="Example1" />

[Live demo](https://youtu.be/UhZxscBsmMs)

## Example 2 - Bill
James has dynamic answers. He remembers who he gave cars to:

<img src="https://i.imgur.com/MhTwDuM.jpg" alt="Example2" />

[Live demo](https://youtu.be/UhZxscBsmMs?t=12)
# Description
Interface for communicating with NPCs


# Conversations configuration

`conversation` params:
- `text` - Text that the NPC says 
- `answers` - List of answers 
- `action`- onRpc event name. Use this if you need a dynamic response. 

`answer` params:
- `text` - Answer option text
- `goto` - conversation id. Use this if you have static conversation logic
- `action` - onRpc event name. Use this if you need a dynamic response. 

`action` - action is the onRpc event that you must add on the server
> [!NOTE]  
> If you use **action** in **conversation/answer** then you don't need to use **answers/goto**