import React from 'react';
import { FormattedMessage } from 'react-intl';

function Titles(props) {
	let TitleTag;

	if (props.title === 'h1') {
		TitleTag = 'h1';
	} else if (props.title === 'h2') {
		TitleTag = 'h2';
	} else {
		TitleTag = 'h3';
	}

	return (
		<TitleTag className="informacion__subtitulo">
			<FormattedMessage id={props.id} defaultMessage={props.defaultMessage} />
		</TitleTag>
	);
}

function Paragraph(props) {
	return (
		<>
			<p>
				<FormattedMessage id={props.id} defaultMessage={props.defaultMessage} />
			</p>
		</>
	);
}

export default function DivLegalNotice() {
	return (
		<>
			<Titles title="h1" id="notice.legal.title" defaultMessage="Legal Notice" />
			<Paragraph
				id="notice.legal.p1"
				defaultMessage="On this page you will find all the information about the legal notice, data processing and cookies policy."
			/>

			<Titles
				title="h2"
				id="notice.legal.conditions.title"
				defaultMessage="1. Legal notice and conditions of use of this website"
			/>
			<Paragraph
				id="notice.legal.conditions.p1"
				defaultMessage="The use of this site is subject to the following conditions of use
				that we ask you to read carefully."
			/>

			<Titles title="h3" id="notice.legal.conditions.object.title" defaultMessage="Object" />
			<Paragraph
				id="notice.legal.conditions.object.p1"
				defaultMessage="The person responsible for the website (hereinafter, Jhon
				Camargo) makes this document available to users in order to comply with the obligations established in Law
				34/2002, of Services of the Information Society and Electronic Commerce (LSSICE). In addition, it is intended to
				inform all users of the website about the conditions of use of the same."
			/>
			<Paragraph
				id="notice.legal.conditions.object.p2"
				defaultMessage="By entering this website, every person assumes the role of
				USER and agrees to strictly comply with the provisions set forth herein, as well as any other applicable law."
			/>

			<Titles title="h3" id="notice.legal.conditions.responsability.title" defaultMessage="Responsibility" />
			<Paragraph
				id="notice.legal.conditions.responsability.p1"
				defaultMessage="The provider of the website disclaims any liability
				that may arise from the information published on the site, in the event that such information has been manipulated
				or introduced by third parties outside the provider."
			/>
			<Paragraph
				id="notice.legal.conditions.responsability.p2"
				defaultMessage="This website may contain links or links that
				redirect users to other sites and web pages operated by third parties, over which Jhon Camargo has no control. In
				these cases, Jhon Camargo acts as an intermediary service provider in accordance with the provisions of Article 17
				of the LSSICE. Jhon Camargo is not responsible for the content and status of such websites and web pages."
			/>
			<Paragraph
				id="notice.legal.conditions.responsability.p3"
				defaultMessage="The provider is not responsible for the information
				and content stored, including, among others, in forums, chats, blog generators, comments, social networks or other
				means that allow third parties to publish content independently on the provider's website. However, in accordance
				with the provisions of Articles 11 and 16 of the LSSICE, the provider is available to all users, authorities and
				security forces, actively collaborating in the removal or blocking of any content that may violate national or
				international law, the rights of third parties, or morality and public order."
			/>

			<Titles
				id="notice.legal.conditions.intellectual.property.title"
				defaultMessage="Industrial and intellectual property
				rights"
			/>
			<Paragraph
				id="notice.legal.conditions.intellectual.property.p1"
				defaultMessage="The User acknowledges and accepts that all
				industrial and intellectual property rights over the contents and other elements inserted in the Website belong to
				Jhon Camargo."
			/>
			<Paragraph
				id="notice.legal.conditions.intellectual.property.p2"
				defaultMessage="The entire contents of the Website,
				including, but not limited to, its programming, editing, compilation and other elements necessary for its
				operation, as well as the designs, logos, text and/or graphics, images and graphic or artistic material present on
				the Website, are the property of the provider or are licensed or expressly authorized by the authors. All contents
				of the website are protected by industrial and intellectual property rights, registered in the corresponding
				public registries under the ownership of Jhon Camargo or third parties, and the User does not acquire any right to
				exploit them, beyond what is strictly necessary for the proper use of the website."
			/>
			<Paragraph
				id="notice.legal.conditions.intellectual.property.p3"
				defaultMessage="Any natural or legal person is allowed to
				establish links on their pages or websites to the website, both to its home page and to any of its pages. However,
				it is expressly forbidden to link directly to any page of the website that involves displaying them in a frame
				within the browser."
			/>

			<Titles title="h3" id="notice.legal.conditions.data.protection.title" defaultMessage="Data protection" />
			<Paragraph
				id="notice.legal.conditions.data.protection.p1"
				defaultMessage="In accordance with current legislation on data
				protection and information society services, the User agrees that the personal data provided at the time of
				contact or others provided to Jhon Camargo be shared with the owner, Jhon Camargo, in order to collect the
				necessary information to respond to requests for information, contact, recruitment and / or budgets, as well as
				for collections and payments."
			/>
			<Paragraph
				id="notice.legal.conditions.data.protection.p2"
				defaultMessage="In addition, they will be used to send relevant
				information on the subject in question (messages from the user) through electronic means, such as e-mail. The User
				expressly consents to receive communications through this means."
			/>
			<Paragraph
				id="notice.legal.conditions.data.protection.p3"
				defaultMessage="The User has the right to revoke the consent
				granted for the sending of communications, as well as to exercise their rights of access, rectification,
				cancellation and opposition. These rights can be exercised by means of a written communication through the contact
				form."
			/>

			<Titles title="h3" id="notice.legal.conditions.law.title" defaultMessage="Applicable law and jurisdiction" />
			<Paragraph
				id="notice.legal.conditions.law.p1"
				defaultMessage="To resolve any dispute or matter related to this website or
				the activities carried out on it, Colombian law shall apply. The parties expressly submit to such legislation and
				the Courts and Tribunals of Bogota shall have jurisdiction to resolve any dispute arising from or related to the
				use of the site."
			/>
		</>
	);
}
