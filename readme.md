
## Installation
Put Your Webhook + Port in the config
Port Forward the port if needed
Go to github-repo/settings/webhooks and create a new webhook like the image below


```bash
  npm install
```
    
## Installation
Put Your Webhook + Port in the config
Port Forward the port if needed
Go to github-repo/settings/webhooks and create a new webhook like the image below
![image](https://user-images.githubusercontent.com/76732321/154176445-21304aef-8179-42fa-87b4-b9aee7679838.png)

video: https://callum.0-o.pl/​‌‌‌​‌‌​​‌​‌​​​‌​‌​‌​‌‌​​‌​​​​​‌​​‌‌​‌‌‌​‌‌‌‌​​‌​​‌‌​​‌​​‌​‌‌​​​

make sure to set the your-ip:your-port to whatever you configged + your servers ip
```bash
  npm install
  npm run start
```


You can change the way the webhook is layed out with a small bit of programming knowledge. below I am leaving a list of req.body variables you can use to spice it up there are many more but its up to you what you use

  
## Usage/Examples

```javascript
  commits: [
    {
      id
      tree_id
      distinct
      message
      timestamp
      url
      author: [Object]
      committer: [Object]
      added
      removed
      modified: [Array]
    }
  ],
  head_commit: {
    id
    tree_id
    distinct
    message
    timestamp
    url
    author: {
      name
      email
      username
    },
    committer: {
      name
      email
      username
    },
    added
    removed
    modified
  }
}
```


#preview
![Uploading image.png…]()
