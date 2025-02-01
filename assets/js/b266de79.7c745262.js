"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3518],{4369:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"/2025/01/25/chezmoi","metadata":{"permalink":"/2025/01/25/chezmoi","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2025-01-25-chezmoi/index.mdx","source":"@site/blog/2025-01-25-chezmoi/index.mdx","title":"chezmoi?","description":"\uc5ec\ub7ec \uba38\uc2e0\uc5d0\uc11c \uc77c\uad00\ub41c \uac1c\ubc1c \ud658\uacbd\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d, personal configuration files(dotfiles, like ~/.gitconfig)\uc744 \uad00\ub9ac\ud558\ub294 \ub3c4\uad6c","date":"2025-01-25T00:00:00.000Z","tags":[],"readingTime":1.835,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"nextItem":{"title":"HashiCorp Nomad Review","permalink":"/hashicorp-nomad"}},"content":"\uc5ec\ub7ec \uba38\uc2e0\uc5d0\uc11c \uc77c\uad00\ub41c \uac1c\ubc1c \ud658\uacbd\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d, personal configuration files(dotfiles, like ~/.gitconfig)\uc744 \uad00\ub9ac\ud558\ub294 \ub3c4\uad6c\\n\\n# Concept\\nchezmoi\ub294 dotfile\uc744 ```~/.local/share/chezmoi``` \uc5d0 \uc800\uc7a5\ud55c\ub2e4. \uadf8\ub9ac\uace0 chezmoi apply \ub97c \uc2e4\ud589\ud558\uba74 \uac01 dotfile \uc758 \ubcc0\uacbd\uc0c1\ud0dc\ub97c \ud655\uc778\ud558\uace0, \uc6d0\ud558\ub294 \uc0c1\ud0dc\uc640 \uc77c\uce58\ud560 \uc218 \uc788\ub3c4\ub85d \ucd5c\uc18c\ud55c\uc758 \ubcc0\uacbd \uc791\uc5c5\uc774 \uc218\ud589\ub41c\ub2e4.\\n\\n# Usage\\n### install chezmoi\\nhttps://www.chezmoi.io/install/\\n\\n## chezmoi \uc124\uc815 \ub9cc\ub4e4\uae30\\n\\n### \ucd08\uae30\ud654 \uc9c4\ud589. ~/.local/share/chezmoi```\uc5d0 dotfile\uc774 \uc800\uc7a5\ub418\ub294 git \uc800\uc7a5\uc18c \uc0dd\uc131.\\n```\\nchezmoi init\\n```\\n\\n### chezmoi\ub97c \ud1b5\ud574 \uad00\ub9ac\ud560 dotfile\uc744 \ucd94\uac00\ud55c\ub2e4.\\n```\\nchezmoi add ~/.zshrc\\n```\\n\\n### .zshrc\ub97c \uc218\uc815\ud560 \ub550 edit \uba85\ub839\uc5b4\ub97c \uc0ac\uc6a9\ud55c\ub2e4.\\n```\\nchezmoi edit ~/.zshrc    # $EDITOR\uc5d0 \uc5d0\ub514\ud130\ub97c \uc9c0\uc815\ud558\uc5ec \ub2e4\ub978 \uc5d0\ub514\ud130\ub85c \uc218\uc815 \uac00\ub2a5.\\n```\\n\\n### working directory\uc758 \ubcc0\uacbd \uc0ac\ud56d \ud655\uc778\uc740 diff \uba85\ub839\uc5b4\ub97c \uc0ac\uc6a9\ud55c\ub2e4.\\n```\\nchezmoi diff\\n```\\n\\n### chezmoi\uc758 \ubcc0\uacbd \ub0b4\uc6a9\uc744 \ubc18\uc601\ud558\uace0\uc790 \ud560 \ub54c\ub294 apply \uba85\ub839\uc5b4\ub97c \uc0ac\uc6a9\ud55c\ub2e4.\\n```\\nchezmoi apply -v(verbose) -n(dry-run)\\n```\\n\\n### chezmoi \ubcc0\uacbd \uc0ac\ud56d\uc744 git \uc800\uc7a5\uc18c\uc5d0 push\\n```\\nchezmoi cd\\ngit add .\\ngit commit -m \\"chezmoi config changed\\"\\ngit remote add origin https://github.com/kukuluku/dotfiles.git\\ngit push\\n```\\n\\n## chezmoi \uc124\uc815 \ubd88\ub7ec\uc624\uae30\\n\uc544\ub798 \uba85\ub839\uc5b4\ub85c git\uc5d0\uc11c \uc124\uc815\uc744 \uadf8\ub300\ub85c \uac00\uc838 \uc62c \uc218 \uc788\ub2e4.\\n```\\nchezmoi init git@github.com:kukuluku/dotfiles.git\\n\\nchezmoi diff          # \uac00\uc838\uc628 \uc124\uc815\uc774 \uc5b4\ub5a4 \ubcc0\uacbd\uc774 \uc788\ub294\uc9c0 \ud655\uc778\\nchezmoi apply -v      # \uac00\uc838\uc628 \uc124\uc815\uc744 \ub85c\uceec\uc5d0 \ubc18\uc601\\n\\nchezmoi edit [FILE]   # \ubc18\uc601 \uc804 FILE \uc9c1\uc811 \uc218\uc815\\nchezmoi merge [FILE]  # FILE merge\\n\\nchezmoi update -v     # \uc704 \uacfc\uc815\ub4e4\uc744 \ud55c \ubc88\uc5d0 \uc218\ud589\\n```"},{"id":"hashicorp-nomad","metadata":{"permalink":"/hashicorp-nomad","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2025-01-24-Hashicorp-Nomad/index.mdx","source":"@site/blog/2025-01-24-Hashicorp-Nomad/index.mdx","title":"HashiCorp Nomad Review","description":"HashiCorp\uc758 \uc624\ud508\uc18c\uc2a4 \uc11c\ube44\uc2a4 \uc2a4\ucf00\uc904\ub7ec. \ucee8\ud14c\uc774\ub108 \ubfd0\ub9cc \uc544\ub2c8\ub77c \ube44 \ucee8\ud14c\uc774\ub108(\ubc14\uc774\ub108\ub9ac, \ubc30\uce58 \ub4f1) \uc6cc\ud06c\ub85c\ub4dc \uad00\ub9ac \uc9c0\uc6d0.","date":"2025-01-24T00:00:00.000Z","tags":[{"inline":false,"label":"hashicorp","permalink":"/tags/hashicorp","description":"The Infrastructure Cloud Company"},{"inline":false,"label":"cloud","permalink":"/tags/cloud","description":"Cloud development"}],"readingTime":1.705,"hasTruncateMarker":false,"authors":[{"name":"Kyungkeun Kang","title":"Software Engineer","url":"https://github.com/kukuluku","page":{"permalink":"/authors/kukuluku"},"socials":{"linkedin":"https://www.linkedin.com/in/kyungkeun-kang-1ab51852/","github":"https://github.com/kukuluku"},"imageURL":"https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/465024210_8781166698612764_194602916858306834_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=gUoip6xOIO8Q7kNvgFVtP-t&_nc_zt=23&_nc_ht=scontent-ssn1-1.xx&_nc_gid=AqS8WHsjd-RVhiVs73KEfng&oh=00_AYDBACYyEfn9lyda-gtoRUDIvC92uXAUcILhTSTt4UV7RQ&oe=679F6705","key":"kukuluku"}],"frontMatter":{"slug":"hashicorp-nomad","title":"HashiCorp Nomad Review","authors":["kukuluku"],"tags":["hashicorp","cloud"]},"unlisted":false,"prevItem":{"title":"chezmoi?","permalink":"/2025/01/25/chezmoi"},"nextItem":{"title":"Xcode\uc5d0 Swift Formatter \uc801\uc6a9\ud558\uae30","permalink":"/xcode-swift-formatter"}},"content":"HashiCorp\uc758 \uc624\ud508\uc18c\uc2a4 \uc11c\ube44\uc2a4 \uc2a4\ucf00\uc904\ub7ec. \ucee8\ud14c\uc774\ub108 \ubfd0\ub9cc \uc544\ub2c8\ub77c \ube44 \ucee8\ud14c\uc774\ub108(\ubc14\uc774\ub108\ub9ac, \ubc30\uce58 \ub4f1) \uc6cc\ud06c\ub85c\ub4dc \uad00\ub9ac \uc9c0\uc6d0.\\nhttps://www.nomadproject.io/\\n\\n# How Nomad Works\\n<image src=\\"https://github.com/user-attachments/assets/55680f28-f188-4f20-b078-f18311e8502c\\" width=\\"70%\\" />\\n<image src=\\"https://github.com/user-attachments/assets/f12da6d2-a949-44e8-b0e1-58cd53d88ef8\\" width=\\"70%\\" />\\n\\n* Nomad\uc758 \uae30\ubcf8 \uc6cc\ud06c\ub85c\ub4dc \ub2e8\uc704\ub294 Job \uc774\ub2e4.\\n* Nomad\uc758 \uc6cc\ud06c\ub85c\ub4dc\ub294 HCL(HashiCorp Configuration Language)\ub85c \uae30\uc220 \ud560 \uc218 \uc788\ub2e4.\\n\\n# Key Definitions\\n### Job\\n  \uae30\ubcf8 \uc6cc\ud06c\ub85c\ub4dc\\n  ```hcl\\n  # This declares a job named \\"docs\\". There can\\n  # be exactly one job declaration per job file\\n  job \\"docs\\" {\\n    ...\\n  }\\n  ```\\n\\n### Task Group\\n  task\uc758 \ubaa8\uc74c\uc73c\ub85c, \ud558\ub098\uc758 \ub3d9\uc77c\ud55c client node\uc5d0\uc11c \uc2e4\ud589\ub418\ub294 \ub2e8\uc704. \uc5ec\ub7ec task group\uc758 \uc778\uc2a4\ud134\uc2a4\ub294 \ub2e4\ub978 \ub178\ub4dc\uc5d0\uc11c \uc2e4\ud589 \uac00\ub2a5\\n  ```hcl\\n  job \\"docs\\" {\\n    group \\"web\\" {\\n      # All tasks in this group will run on \\n      # the same node\\n      ...\\n    }\\n    group \\"logging\\" {\\n      # These tasks must also run together \\n      # but may be a different node from web\\n      ...\\n    }\\n  }\\n  ```\\n\\n### Task\\n  \uac00\uc7a5 \uc791\uc740 \ub2e8\uc704\uc758, \uae30\ubcf8\uc774 \ub418\ub294 \ub2e8\uc704\\n  ```hcl\\n  job \\"docs\\" {\\n    group \\"example\\" {\\n      task \\"server\\" {\\n        # ...\\n      }\\n    }\\n  }\\n  ```\\n\\n### Task Driver\\n  \uc791\uc5c5\uc744 \uc2e4\ud589\ud558\ub294 \uae30\ubcf8 \uc218\ub2e8(e.g. Docker, Java, Qemu..)\\n  ```hcl\\n  task \\"server\\" {\\n    driver = \\"docker\\"\\n    ...\\n  }\\n  ```\\n\\n### Resources\\n  \uc791\uc5c5\uc744 \uc218\ud589\ud560 \ub54c \ud544\uc694 \uc0ac\ud56d\uc744 \uba85\uc2dc\ud558\ub294 \uac83\\n  ```hcl\\n  job \\"docs\\" {\\n    group \\"example\\" {\\n      task \\"server\\" {\\n        resources {\\n          cpu    = 100\\n          memory = 256\\n\\n          network {\\n            mbits = 100\\n            port \\"http\\" {}\\n            port \\"ssh\\" {\\n              static = 22\\n            }\\n          }\\n  \\n          device \\"nvidia/gpu\\" {\\n            count = 2\\n          }\\n        }\\n      }\\n    }\\n  }\\n  ```\\n\\n# \ucd9c\ucc98\\nhttps://medium.com/hashicorp-engineering/hashicorp-nomad-from-zero-to-wow-1615345aa539#9cc6"},{"id":"xcode-swift-formatter","metadata":{"permalink":"/xcode-swift-formatter","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2025-01-11-Apply-Xcode-Swift-Formatter/index.mdx","source":"@site/blog/2025-01-11-Apply-Xcode-Swift-Formatter/index.mdx","title":"Xcode\uc5d0 Swift Formatter \uc801\uc6a9\ud558\uae30","description":"Xcode16\uc5d0\uc11c Swift \ucf54\ub4dc\ub97c \uc791\uc131 \uc911 \uc790\ub3d9\uc73c\ub85c \ub3d9\uc791\ud558\ub294(Format On Save) formatter\ub97c \uc801\uc6a9\ud574 \ubcf4\uc558\ub2e4.","date":"2025-01-11T00:00:00.000Z","tags":[{"inline":false,"label":"Xcode","permalink":"/tags/xcode","description":"Apple macos IDE"},{"inline":false,"label":"swift","permalink":"/tags/swift","description":"swift programing language"}],"readingTime":1.02,"hasTruncateMarker":false,"authors":[{"name":"Kyungkeun Kang","title":"Software Engineer","url":"https://github.com/kukuluku","page":{"permalink":"/authors/kukuluku"},"socials":{"linkedin":"https://www.linkedin.com/in/kyungkeun-kang-1ab51852/","github":"https://github.com/kukuluku"},"imageURL":"https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/465024210_8781166698612764_194602916858306834_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=gUoip6xOIO8Q7kNvgFVtP-t&_nc_zt=23&_nc_ht=scontent-ssn1-1.xx&_nc_gid=AqS8WHsjd-RVhiVs73KEfng&oh=00_AYDBACYyEfn9lyda-gtoRUDIvC92uXAUcILhTSTt4UV7RQ&oe=679F6705","key":"kukuluku"}],"frontMatter":{"slug":"xcode-swift-formatter","title":"Xcode\uc5d0 Swift Formatter \uc801\uc6a9\ud558\uae30","authors":["kukuluku"],"tags":["xcode","swift"]},"unlisted":false,"prevItem":{"title":"HashiCorp Nomad Review","permalink":"/hashicorp-nomad"}},"content":"Xcode16\uc5d0\uc11c Swift \ucf54\ub4dc\ub97c \uc791\uc131 \uc911 \uc790\ub3d9\uc73c\ub85c \ub3d9\uc791\ud558\ub294(Format On Save) formatter\ub97c \uc801\uc6a9\ud574 \ubcf4\uc558\ub2e4.\\n\\n## SwiftFormat \uc124\uce58\\nhomebrew\ub97c \ud1b5\ud574 \uc124\uce58 \ud6c4 Xcode\uc758 \uc775\uc2a4\ud150\uc158\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \uad6c\uc131\ud574 \ubcf4\uc558\ub2e4.\\n* [github](https://github.com/nicklockwood/SwiftFormat)\\n\\n1. homebrew\ub97c \ud1b5\ud574 swiftformat-for-xcode \uc124\uce58\\n```\\nbrew install --cask swiftformat-for-xcode\\n```\\n\\n2. \uc124\uce58 \ub41c swiftformat-for-xcode \ub97c \uc2e4\ud589\ud55c\ub2e4.\\n<img width=\\"487\\" alt=\\"image\\" src=\\"https://github.com/user-attachments/assets/8ba3fb10-53a7-4b32-be82-34c7f3474709\\" />\\n\\n3. \uc124\uc815 > \uc77c\ubc18 > \ub85c\uadf8\uc778 \ud56d\ubaa9 \ubc0f \ud655\uc7a5 \ud504\ub85c\uadf8\ub7a8 > SwiftFormat for Xcode \uccb4\ud06c\\n<img width=\\"705\\" alt=\\"image\\" src=\\"https://github.com/user-attachments/assets/e5cceaab-7a7d-4fbd-8d41-763dffc58ca4\\" />\\n\\n4. Xcode\uc5d0\uc11c \uc800\uc7a5 \uc2dc SwiftFormat > Format File \uc744 \ub3d9\uc791\ud558\ub3c4\ub85d Key Binding \uc744 \uc218\uc815\ud55c\ub2e4.  \\nXcode > Settings > Key Bindings\\n![image](https://github.com/user-attachments/assets/c91a8511-b6a9-4748-8bc7-ef658a3fa377)\\n\\n## \uacb0\ub860\\n\uc774\ub807\uac8c \uc800\uc7a5 \uc2dc \uc790\ub3d9\uc73c\ub85c Swift formatting\uc744 \ud558\ub3c4\ub85d \uc801\uc6a9\ud574 \ubcf4\uc558\ub2e4. \ucd94\uac00\ub85c \ud504\ub85c\uc81d\ud2b8\uc5d0 .swiftformat \ud30c\uc77c\uc744 \ucd94\uac00\ud558\uba74 \ud574\ub2f9 \ud504\ub85c\uc81d\ud2b8\uc5d0 swift convention \uc124\uc815\uc774 \uac00\ub2a5\ud558\ub2e4."}]}}')}}]);