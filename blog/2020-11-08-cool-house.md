---
slug: cool-house
title: Дом с душой
author: Александр Павлов
author_url: https://github.com/progivt
author_image_url: https://avatars0.githubusercontent.com/u/7911562?v=4
tags: [coder, khan]
---

import useBaseUrl from '@docusaurus/useBaseUrl';


Всегда приятно, когда встречаешь задание, по которому видно, что человеку интересно. Лучший дом!

export const Video = ({children, src}) => (<video autoplay='autoplay' loop='loop' preload='metadata'>{children}<source src={src} type='video/mp4'/>
</video> );

<Video src={useBaseUrl('img/House.mp4')}></Video>
