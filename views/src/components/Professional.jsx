import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ChangeTitle } from './Header';

export default function Professional() {
	return (
		<>
			<h2 className="informacion__subtitulo">
				<FormattedMessage id="information.about.professional" defaultMessage="Professionally..." />
			</h2>

			<p>
				<FormattedMessage
					id="information.about.professional.p1"
					defaultMessage="In 2022 I participated in the biggest competition that Sena has, SenaSoft. It is a hackathon in which the best programmers from all over the country meet to solve a test assigned by companies in the productive sector. In this competition there were many categories, I participated in the category of free development along with a fellow programmer. The challenge we were assigned was to make a game, with which we managed to position ourselves in the number 6 position. Twenty-seven teams participated in this category."
				/>
			</p>

			<p>
				<FormattedMessage
					id="information.about.professional.p2"
					defaultMessage="Participating in this competition made me realize the shortcomings that I had at that time, so from the moment the hackathon ended I started working on them. I am very proud to say that I participated in SenaSoft because it was the result of my effort, love and dedication to this great industry. And although the result was not what I expected, I gained much more than what I might have lost. That's what it's all about, isn't it? Learning from failures, so I'm sure I learned from them."
				/>
			</p>

			<p>
				<FormattedMessage
					id="information.about.professional.p3"
					defaultMessage="I am currently doing a technologist at the Sena training center, but my study goals do not go this far, I want to do a specialization in systems engineering."
				/>
			</p>

			<p>
				<FormattedMessage
					id="information.about.professional.p4"
					defaultMessage="During the years that I have been a programmer I have developed different projects on my own that have served me as practice and have given me experience in this field. I don't have a defined programming language, I do very well in JAVA, PHP, Python, JavaScript, but the one I love the most is Python. Every day I learn new things, I like to be investigating new technologies, I never stop learning."
				/>
			</p>

			<p>
				<FormattedMessage
					id="information.about.professional.p5"
					defaultMessage="Although I don't have a degree in computer repair, my curiosity has led me to learn many things in the hardware part. I myself have learned how to do maintenance and repairs to computers, so much so that I managed to build my first gamer pc by myself. I remember that since I was a kid I have liked everything related to software and hardware."
				/>
			</p>
		</>
	);
}
