# atlv-npc-conversation

# Install
To install this script, just install it in the `resources` folder of your server and register it in your `config` file.

# Example




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

> [!NOTE]  
> If you use **action** in **conversation/answer** then you don't need to use **answers/goto**

# ❤️ Sponsor 

If you want to support me, just give me a [coffee ☕️](https://www.buymeacoffee.com/zafarzafark)
