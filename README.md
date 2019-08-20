<div align='center'>
    <h1>
        Present
    </h1>
    <i>A simple way to present your markdown files.</i>
</div>

---

[![Say Thanks](https://img.shields.io/badge/Say-Thanks-blue.svg)](https://saythanks.io/to/xypnox) [![Netlify Status](https://api.netlify.com/api/v1/badges/8b60698e-7056-47cd-b700-826475de0d3c/deploy-status)](https://app.netlify.com/sites/xypradarsh/deploys)

## Why tho?

You are already packed on your schedule. Then, by the grace of the devil, you suddenly face the challenge that you have encountered several times before. You have to present something on short notice. You proceed to divide your time in two parts, first you prepare on what to present and the contents of the presentation.

Then, you face the looming task to create a presentation to accompany your talk. There is no way of escaping it.

You realize that there exist several tools to create presentations. You google for the best ones, and you land with either Slides, Prezi or Slides. The first is a familiar option, a no nonsense oldy presentation software. You can create all sorts of presentations. But they never look nice and you have to add every single damn content yourself.

Prezi has a similar story. But it is much more complicated and you dare not spin up your own theme or try to create a custom animation. You just pick up the best template you can find and in the end you have a fresh piece of animated garbage. It looks decent and will wow with the animations, yet it is a considerable time sink.

Slides is a tool that I have never tried. It has a great feature set with a unique way of presentation. However it is a new tool, you have to take time learning it and then, with luck you can create something. Reveal.js, upon which it is based on is another behemoth. You have to learn all the niche syntactical magic and it goes well beyond the domain of regular users.

And in every tool, you have to tirelessly add text, images and diagrams and for heaven's sake, tables and flowcharts to your presentation. Then, if the time permits and if you still feel like it, you format, align and color all the content.

When it is all done and dusted, you wish only if there was a way to create the presentations easily. Only if you could just focus on the content and let the software take care of everything else. Only if.

I assume you are acquainted with markdown. One of the greatest ways to format content. A simple yet elegant solution to write documents. What of we could use the same for presentations?

There are several tools to create full blown presentations but there is nothing at the moment to present a markdown file with minimal fuss. You have to either learn all the complicated syntax and formatting to create a apt markdown file to create something close to presenting. Even then, the default themes for presentation are acceptable at best.

A close solution is Dropbox Paper's present document feature. But you have to sign up and your local file will get out of sync. Also, the richness and flexibility of markdown is lost. You have to still adjust and the results even then leave something to be desired.

## Aspiration

Present aims to give you a no fuss solution to present your markdown files.

## How to use?

Open the website, Upload the markdown, Present. That's it.

Hey, there are a few handy shortcuts to help you out:

| Keyboard Shortcuts        | Function          |
| ------------------------- | ----------------- |
| `space` or `n` or `Enter` | Next Slide        |
| `p`                       | Previous Slide    |
| `f`                       | Fullscreen Mode   |
| `q`                       | Quit Presentation |

## How does this magic work?

The functioning of the app is pretty basic and I still can't muster why anyone didn't do this first.

First, we split the markdown in chunks that are rendered in different slides. The split happens with a set of sensible rules.

1. Headings should appear on new slides.
2. Easily readable content on every slide.

Then each markdown is rendered in html and presented as a deck of slides.

The benefits of this approach are several. First, HTML + CSS offers a nice and easy way to style decently. Text and images are aligned properly as expected. The font sizes are hierarchal and stuff just works.

## FAQ

### 1. But how do I style stuff?

There are plans to add a few themes, but the main aim of this project is not to give you a full featured presentation creator. It is meant for quick markdown presentations when you lack time. If you want to get in the realm of full customizability and custom themes, you can always clone the repo, add styles and have your own personal customized quick slide creator.

### 2. The slides' contents are not in the way I wish to present!

There are plans to add a strict mode. In this mode, the slides will only break up with every horizontal rule you insert in the markdown. Then, you can _choose_ what exactly needs to be on every slide. This is still unimplemented but I would be glad if you can help out.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
