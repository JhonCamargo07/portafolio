import React from 'react';
import { FormattedMessage } from 'react-intl';

export default function Personal() {
	return (
		<>
			<h2 className="informacion__subtitulo">
				<FormattedMessage id="information.about.personal" defaultMessage="Personally..." />
			</h2>

			<p>
				<FormattedMessage
					id="information.about.personal.p1"
					defaultMessage="I am a quiet person, I like to do sports, some weekends I go jogging. I like to listen to music and more than just listen to it, I like to analyze the lyrics of each song. I am very interested in listening to stories from the past, anecdotes and even more if they are taken to movies or series."
				/>
			</p>

			<p>
				<FormattedMessage
					id="information.about.personal.p2"
					defaultMessage="Although I do not read much, I am beginning to cultivate the habit of reading. I am a little interested in politics and although I don't know much about it I consider that it should be in every person because there is nothing more important than choosing correctly the people who will lead the country."
				/>
			</p>
		</>
	);
}
