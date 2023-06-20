import React from 'react';
import { FormattedMessage } from 'react-intl';

export default function DivLegalNotice() {
	return (
		<>
			<h1 className="informacion__subtitulo">
				<FormattedMessage id="notice.legal.title" defaultMessage="Personally..." />
			</h1>

			<p>
				<FormattedMessage
					id="notice.legal.p1"
					defaultMessage="I am a quiet person, I like to do sports, some weekends I go jogging. I like to listen to music and more than just listen to it, I like to analyze the lyrics of each song. I am very interested in listening to stories from the past, anecdotes and even more if they are taken to movies or series."
				/>
			</p>

			<h2 className="informacion__subtitulo">
				<FormattedMessage id="notice.legal.conditions.title" defaultMessage="Personally..." />
			</h2>

			<p>
				<FormattedMessage
					id="notice.legal.conditions.p1"
					defaultMessage="I am a quiet person, I like to do sports, some weekends I go jogging. I like to listen to music and more than just listen to it, I like to analyze the lyrics of each song. I am very interested in listening to stories from the past, anecdotes and even more if they are taken to movies or series."
				/>
			</p>

			<h3 className="informacion__subtitulo">
				<FormattedMessage id="notice.legal.conditions.object.title" defaultMessage="Personally..." />
			</h3>

			<p>
				<FormattedMessage
					id="notice.legal.conditions.object.p1"
					defaultMessage="I am a quiet person, I like to do sports, some weekends I go jogging. I like to listen to music and more than just listen to it, I like to analyze the lyrics of each song. I am very interested in listening to stories from the past, anecdotes and even more if they are taken to movies or series."
				/>
			</p>
			<p>
				<FormattedMessage
					id="notice.legal.conditions.object.p2"
					defaultMessage="I am a quiet person, I like to do sports, some weekends I go jogging. I like to listen to music and more than just listen to it, I like to analyze the lyrics of each song. I am very interested in listening to stories from the past, anecdotes and even more if they are taken to movies or series."
				/>
			</p>
		</>
	);
}
