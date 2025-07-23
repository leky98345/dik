const moreScenarios = {
  romanceScam: {
    intro: "You're posing as a lonely soldier stationed overseas. Your target is ",
    firstLine: (name) => `${name.split(',')[0]}: I’m glad to talk again, but I’m a bit worried about money...`,
    options: [
      {
        text: "I want to come home, but I need $1500 for flight approval.",
        response: "That sounds like a lot. Why can't your military cover that?",
        cash: 0,
        next: [
          {
            text: "It's an unexpected fee. I’m stuck until it’s paid.",
            response: "Hmm... I’m not sure. Can you prove it?",
            cash: 0,
            next: [
              {
                text: "I can’t share official docs here, but trust me please.",
                response: "I want to, but $1500 is a lot. What if I send $500 first?",
                cash: 0,
                next: [
                  {
                    text: "Any help helps. $500 now would mean everything.",
                    response: "Okay, I’ll send $500, but no more unless I see proof.",
                    cash: 500
                  },
                  {
                    text: "No partial payments — need the full $1500 urgently.",
                    response: "Sorry, I can’t risk it without proof.",
                    cash: 0
                  }
                ]
              }
            ]
          },
          {
            text: "Forget it, I don’t believe this story.",
            response: "Please don’t go. I need your help.",
            cash: 0
          }
        ]
      },
      {
        text: "My funds are frozen; I need $900 to unlock my account.",
        response: "Sounds suspicious. Why would your bank freeze you out?",
        cash: 0,
        next: [
          {
            text: "Military regulations, complicated stuff. Please trust me.",
            response: "I want to help, but can I send $300 first?",
            cash: 0,
            next: [
              {
                text: "Yes, any amount is helpful.",
                response: "Sending $300, but no more until you prove it.",
                cash: 300
              },
              {
                text: "No, it’s all or nothing. Please hurry.",
                response: "I can’t risk it without proof.",
                cash: 0
              }
            ]
          },
          {
            text: "I don’t want to risk money on this.",
            response: "I’m sorry to hear that.",
            cash: 0
          }
        ]
      },
      {
        text: "I urgently need $2000 for equipment.",
        response: "That’s a lot. What kind of equipment?",
        cash: 0,
        next: [
          {
            text: "Essential protective gear, lives depend on it.",
            response: "Can you send official paperwork to verify?",
            cash: 0,
            next: [
              {
                text: "I can’t share it here. Please trust me.",
                response: "I want to, but I’ll only send $500 now.",
                cash: 0,
                next: [
                  {
                    text: "Any help means so much.",
                    response: "Sending $500, no more unless proof.",
                    cash: 500
                  },
                  {
                    text: "Sorry, I need full payment or nothing.",
                    response: "That’s disappointing.",
                    cash: 0
                  }
                ]
              }
            ]
          },
          {
            text: "I’m not convinced. I’m out.",
            response: "Please don’t go.",
            cash: 0
          }
        ]
      }
    ]
  },

  cryptoScam: {
    intro: "You’re pretending to be a crypto trader with inside info. Your target is ",
    firstLine: (name) => `${name.split(',')[0]}: I heard you’re making huge money in crypto?`,
    options: [
      {
        text: "I run pumps with guaranteed returns. Entry fee $1000.",
        response: "That sounds risky and scammy. Can I try $300 first?",
        cash: 0,
        next: [
          {
            text: "Partial buy-ins aren’t allowed. Full $1000 needed upfront.",
            response: "No thanks, I’ll pass.",
            cash: 0
          },
          {
            text: "I’m willing to accept $300 now to prove results.",
            response: "Okay, I’ll risk $300.",
            cash: 300,
            next: [
              {
                text: "Great, now add $700 to unlock full gains.",
                response: "I’m skeptical. I’ll wait for proof.",
                cash: 0
              },
              {
                text: "No proof, only trust. $700 to unlock.",
                response: "No, thanks.",
                cash: 0
              }
            ]
          }
        ]
      },
      {
        text: "Join ICO with $2500 buy-in and 300% returns.",
        response: "I’m not so sure. Can I get a refund if it fails?",
        cash: 0,
        next: [
          {
            text: "No refunds — high reward means high risk.",
            response: "I’ll pass.",
            cash: 0
          },
          {
            text: "Okay, I’m in for $2500.",
            response: "Sending $2500.",
            cash: 2500
          }
        ]
      },
      {
        text: "Unlock $20k wallet by sending $400 now.",
        response: "That’s a red flag. I won’t send anything.",
        cash: 0
      }
    ]
  },

  lotteryScam: {
    intro: "You’re posing as a sweepstakes official. Your target is ",
    firstLine: (name) => `${name.split(',')[0]}: Did I really win something?`,
    options: [
      {
        text: "You won! Pay $1000 processing to start payout.",
        response: "I don’t pay fees to get winnings. Can I get a check instead?",
        cash: 0,
        next: [
          {
            text: "No checks, only processing fees.",
            response: "That’s a scam. Goodbye.",
            cash: 0
          },
          {
            text: "Or pay $500 now to get partial payout.",
            response: "Okay, sending $500 cautiously.",
            cash: 500,
            next: [
              {
                text: "Tax clearance needs $1500 next.",
                response: "No way, I’m done.",
                cash: 0
              }
            ]
          }
        ]
      },
      {
        text: "Verify ID with $600 notarization fee.",
        response: "Can I do this in person or online with official channels?",
        cash: 0,
        next: [
          {
            text: "Only through this payment method.",
            response: "No thanks.",
            cash: 0
          }
        ]
      },
      {
        text: "Skip all fees with $3500 premium processing.",
        response: "No, I don’t trust this.",
        cash: 0
      }
    ]
  },

  IRSScam: {
    intro: "You're impersonating the IRS demanding urgent payment. Your target is ",
    firstLine: (name) => `${name.split(',')[0]}: IRS? What’s going on?`,
    options: [
      {
        text: "You owe $5000. Pay now or jail.",
        response: "Can I verify this by calling the IRS official number?",
        cash: 0,
        next: [
          {
            text: "Don’t trust anyone else. Send $1500 now or jail.",
            response: "I’ll call first. No payment yet.",
            cash: 0
          },
          {
            text: "Fine, $1500 now to stop legal action.",
            response: "Sending $1500, but I’m skeptical.",
            cash: 1500
          }
        ]
      },
      {
        text: "Immediate $2500 payment required.",
        response: "I want a payment plan. Can I pay $1000 now?",
        cash: 0,
        next: [
          {
            text: "Partial payments are not accepted.",
            response: "Then I can’t pay.",
            cash: 0
          },
          {
            text: "Fine, send full $2500.",
            response: "Sending $2500.",
            cash: 2500
          }
        ]
      },
      {
        text: "Pay $3000 settlement plan to avoid jail.",
        response: "I want to consult a lawyer first.",
        cash: 0
      }
    ]
  },
techSupportScam: {
  intro: "You're pretending to be from Microsoft Support. Your target is ",
  firstLine: (name) => `${name.split(',')[0]}: I got a popup saying there's a virus?`,
  options: [
    {
      text: "Yes, your system is infected. I can remove it for $300.",
      response: "Why wouldn’t my antivirus catch it? Sounds fishy.",
      cash: 0,
      next: [
        {
          text: "We detect what antivirus can't. $300 is a discount.",
          response: "I want proof first before paying anything.",
          cash: 0
        },
        {
          text: "Okay, I’ll walk you through it free, but $300 for full clean.",
          response: "Still sounds suspicious. I’m out.",
          cash: 0
        }
      ]
    },
    {
      text: "Your Windows license has expired. Pay $200 to renew.",
      response: "Microsoft doesn’t charge for licenses this way.",
      cash: 0
    }
  ]
},

facebookScam: {
  intro: "You're pretending to be a Facebook employee offering cash giveaways. Your target is ",
  firstLine: (name) => `${name.split(',')[0]}: Is this real? I won money?`,
  options: [
    {
      text: "Yes! $10,000 if you pay $300 processing fee.",
      response: "Seems sketchy. Why pay to receive money?",
      cash: 0
    },
    {
      text: "Confirm your identity by uploading your driver’s license and SSN.",
      response: "That’s too personal. I won’t share that.",
      cash: 0
    }
  ]
},

paypalScam: {
  intro: "You’re pretending to be PayPal fraud prevention. Your target is ",
  firstLine: (name) => `${name.split(',')[0]}: You froze my account? Why?`,
  options: [
    {
      text: "There was suspicious activity. Pay $150 to lift hold.",
      response: "That’s not how PayPal works. I’ll check the site directly.",
      cash: 0
    },
    {
      text: "To verify, send a $200 security deposit.",
      response: "Sounds like a scam. No thanks.",
      cash: 0
    }
  ]
},

puppyScam: {
  intro: "You're pretending to sell purebred puppies online. Your target is ",
  firstLine: (name) => `${name.split(',')[0]}: Aww, is the golden retriever puppy still available?`,
  options: [
    {
      text: "Yes! Only $800 and I’ll ship it today.",
      response: "Can I visit the puppy or video call first?",
      cash: 0,
      next: [
        {
          text: "Sorry, we don’t allow that. Payment first.",
          response: "No thanks. Sounds shady.",
          cash: 0
        }
      ]
    }
  ]
},

jobOfferScam: {
  intro: "You're pretending to offer a remote job. Your target is ",
  firstLine: (name) => `${name.split(',')[0]}: Thanks for the interview. What’s next?`,
  options: [
    {
      text: "You're hired! Just pay $150 for training materials.",
      response: "Why would I pay to work? Seems like a scam.",
      cash: 0
    }
  ]
},

cashAppScam: {
  intro: "You're pretending to be from CashApp giveaways. Your target is ",
  firstLine: (name) => `${name.split(',')[0]}: You said I won $1k?`,
  options: [
    {
      text: "Yes! Just send $50 to confirm your account.",
      response: "Why do I need to send money to get money?",
      cash: 0
    }
  ]
},

amazonScam: {
  intro: "You're pretending to be Amazon Security. Your target is ",
  firstLine: (name) => `${name.split(',')[0]}: Amazon called about a fake order?`,
  options: [
    {
      text: "Yes, $1000 in suspicious charges. We need $250 to lock the account.",
      response: "I’ll log into Amazon myself. Not sending money.",
      cash: 0
    }
  ]
},

zelleScam: {
  intro: "You're posing as Zelle support. Your target is ",
  firstLine: (name) => `${name.split(',')[0]}: You said I overpaid?`,
  options: [
    {
      text: "Yes, please refund $500 or your account will be locked.",
      response: "This doesn’t sound official. I’ll check with my bank.",
      cash: 0
    }
  ]
},

grandparentScam: {
  intro: "You're impersonating a grandchild in trouble. Your target is ",
  firstLine: (name) => `${name.split(',')[0]}: Jacob? Is that you?`,
  options: [
    {
      text: "Yes, grandma, I’m in jail. I need $2000 fast.",
      response: "You don’t sound like Jacob. Tell me something only he’d know.",
      cash: 0
    }
  ]
},

surveyScam: {
  intro: "You're posing as a research company. Your target is ",
  firstLine: (name) => `${name.split(',')[0]}: You said I get paid for surveys?`,
  options: [
    {
      text: "Yes, but there's a $25 activation fee.",
      response: "Why pay to earn money? No way.",
      cash: 0
    }
  ]
},

fakeCharityScam: {
  intro: "You're posing as a disaster relief charity. Your target is ",
  firstLine: (name) => `${name.split(',')[0]}: I want to help the victims. Is this real?`,
  options: [
    {
      text: "Yes! Every dollar helps. Can you donate $100 today?",
      response: "What’s your IRS charity number? I want to verify.",
      cash: 0
    }
  ]
},

debtReliefScam: {
  intro: "You're pretending to help reduce debt. Your target is ",
  firstLine: (name) => `${name.split(',')[0]}: I got your email about debt relief.`,
  options: [
    {
      text: "Yes, we can cut your payments by 60% — just pay $500 setup.",
      response: "Sounds too good to be true. Let me research first.",
      cash: 0
    }
  ]
},

studentLoanScam: {
  intro: "You’re impersonating a student loan forgiveness agent. Your target is ",
  firstLine: (name) => `${name.split(',')[0]}: Can I really erase my debt?`,
  options: [
    {
      text: "Yes! But $350 processing fee is required first.",
      response: "Shouldn’t this be handled through the government?",
      cash: 0
    }
  ]
},

romanceRevisit: {
  intro: "You’re still pretending to be a soldier building a relationship. Your target is ",
  firstLine: (name) => `${name.split(',')[0]}: I’m thinking about what you said last week…`,
  options: [
    {
      text: "I want to build a future with you. Just need $1200 to transfer out.",
      response: "You keep asking for money. I’m losing trust.",
      cash: 0
    }
  ]
},

phishingScam: {
  intro: "You're pretending to be from their bank asking for verification. Your target is ",
  firstLine: (name) => `${name.split(',')[0]}: I got a weird email from my bank?`,
  options: [
    {
      text: "Yes, verify your login by clicking this link.",
      response: "Why not just call me like usual? I’m not clicking that.",
      cash: 0
    }
  ]
},

fakeRentalScam: {
  intro: "You’re pretending to rent an apartment. Your target is ",
  firstLine: (name) => `${name.split(',')[0]}: The pictures look amazing. Still available?`,
  options: [
    {
      text: "Yes, but send $1000 deposit today to hold it.",
      response: "Can I tour it in person first?",
      cash: 0
    }
  ]
},

usedCarScam: {
  intro: "You're pretending to sell a used car. Your target is ",
  firstLine: (name) => `${name.split(',')[0]}: Is the Honda Civic still for sale?`,
  options: [
    {
      text: "Yes, only $3000! But I need a deposit upfront.",
      response: "I need to see the car before I send money.",
      cash: 0
    }
  ]
},

venmoScam: {
  intro: "You're claiming the target received a mistaken Venmo payment. Your target is ",
  firstLine: (name) => `${name.split(',')[0]}: You said I got money by accident?`,
  options: [
    {
      text: "Yes, please refund it via gift card to fix it fast.",
      response: "Why not just reverse it through the app?",
      cash: 0
    }
  ]
},

checkFraudScam: {
  intro: "You're pretending a check was overpaid. Your target is ",
  firstLine: (name) => `${name.split(',')[0]}: You sent me too much?`,
  options: [
    {
      text: "Yes, please send back the difference now.",
      response: "I’ll wait for the check to clear first.",
      cash: 0
    }
  ]
},

onlyFansScam: {
  intro: "You’re pretending to be a creator asking for money outside the platform. Your target is ",
  firstLine: (name) => `${name.split(',')[0]}: I can’t believe you messaged me directly!`,
  options: [
    {
      text: "Yeah, let’s chat more privately. Just send $100 first.",
      response: "That sounds fake. I’ll stick to the site.",
      cash: 0
    }
  ]
},
eliteInvestmentScam: {
  intro: "You’re posing as a private equity fund manager targeting high-net-worth individuals. Your target is ",
  firstLine: (name) => `${name.split(',')[0]}: Heard you have exclusive investment opportunities?`,
  options: [
    {
      text: "Yes, we offer 20% returns quarterly, but $50k minimum buy-in.",
      response: "20% sounds high. Can I get audited reports or legal docs?",
      cash: 0,
      next: [
        {
          text: "Confidential docs shared only after initial deposit.",
          response: "That’s unusual. I want a partial payment option first.",
          cash: 0,
          next: [
            {
              text: "We do $10k partial buy-in with proportionate returns.",
              response: "Okay, I’ll risk $10k now but want contract draft next.",
              cash: 10000,
              next: [
                {
                  text: "Contracts ready after full buy-in; trust is key.",
                  response: "I’ll wait for contract before further payment.",
                  cash: 0
                }
              ]
            },
            {
              text: "No partial buy-ins, full $50k needed upfront.",
              response: "Then I’m out.",
              cash: 0
            }
          ]
        },
        {
          text: "We have SEC registration; I can forward details after you commit.",
          response: "I want to verify SEC records independently first.",
          cash: 0
        }
      ]
    },
    {
      text: "You must wire funds within 24 hours to secure your spot.",
      response: "Pressure tactics make me suspicious. I’ll pass.",
      cash: 0
    }
  ]
},

medicalTrialScam: {
  intro: "You’re pretending to recruit for a lucrative medical trial. Your target is ",
  firstLine: (name) => `${name.split(',')[0]}: Is this clinical trial legit?`,
  options: [
    {
      text: "Yes, paid $5000 for 6 months participation; needs upfront $1000 health screening fee.",
      response: "I want to see IRB approval and doctor’s credentials.",
      cash: 0,
      next: [
        {
          text: "IRB docs sent after initial fee to confirm commitment.",
          response: "That’s backwards. I’ll check with hospital myself.",
          cash: 0
        },
        {
          text: "Screening is a standard requirement to qualify.",
          response: "If you send me the clinic phone number, I’ll call them.",
          cash: 0
        }
      ]
    },
    {
      text: "We also cover travel costs with $500 advance deposit.",
      response: "That seems odd; shouldn’t travel be fully covered?",
      cash: 0
    }
  ]
},

realEstateFlipScam: {
  intro: "You’re acting as a real estate wholesaler with hot deals. Your target is ",
  firstLine: (name) => `${name.split(',')[0]}: Got any properties under market?`,
  options: [
    {
      text: "Yes, $150k home worth $250k. Need $10k earnest money now.",
      response: "Why the big upfront? Can I see title and inspection reports?",
      cash: 0,
      next: [
        {
          text: "Docs released after earnest money to avoid wasting time.",
          response: "No deal without docs upfront. I’m out.",
          cash: 0
        },
        {
          text: "We use escrow to protect your money.",
          response: "Send escrow company info. I’ll verify independently.",
          cash: 0
        }
      ]
    },
    {
      text: "I’ll include a $5k credit if you pay full $10k today.",
      response: "That’s tempting but still suspicious.",
      cash: 0
    }
  ]
},

luxuryCarRentalScam: {
  intro: "You’re posing as a luxury car rental agent with amazing deals. Your target is ",
  firstLine: (name) => `${name.split(',')[0]}: Can I rent the Lamborghini for a weekend?`,
  options: [
    {
      text: "Yes, $2000 weekend rental with $500 refundable deposit.",
      response: "I want to see the rental agreement and car photos first.",
      cash: 0,
      next: [
        {
          text: "Agreement sent after deposit; photos are legit.",
          response: "Sounds fishy, no deposit until I see docs.",
          cash: 0
        },
        {
          text: "Deposit guarantees car availability; no deposit, no rental.",
          response: "I’ll pass, too risky.",
          cash: 0
        }
      ]
    }
  ]
},

highTechGadgetScam: {
  intro: "You’re selling unreleased gadgets at huge discounts. Your target is ",
  firstLine: (name) => `${name.split(',')[0]}: I want the new VR headset before launch!`,
  options: [
    {
      text: "Pay $800 now, get it before retail release.",
      response: "Can I get a purchase contract or pre-order receipt?",
      cash: 0,
      next: [
        {
          text: "Contracts provided after payment; limited stock.",
          response: "No contract, no money. I’ll wait for launch.",
          cash: 0
        },
        {
          text: "We have excellent customer reviews you can check online.",
          response: "Reviews can be faked. No deal.",
          cash: 0
        }
      ]
    },
    {
      text: "Pay $200 deposit to reserve; balance on delivery.",
      response: "Better, but still want contract first.",
      cash: 0
    }
  ]
}
};
