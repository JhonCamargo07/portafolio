import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import ImgHtml from '../assets/img/html.png';
import ImgCss from '../assets/img/css.png';
import ImgMD from '../assets/img/markdown.png';
import ImgSass from '../assets/img/sass.png';
import ImgBootStrap from '../assets/img/bootstrap.png';
import ImgFigma from '../assets/img/figma.png';
import ImgJS from '../assets/img/javascript.png';
import ImgReact from '../assets/img/react.png';
import ImgAngular from '../assets/img/angular.png';
import ImgPhp from '../assets/img/php.png';
import ImgLaravel from '../assets/img/laravel.png';
import ImgJava from '../assets/img/java.png';
import ImgCShar from '../assets/img/cShar.png';
import ImgPython from '../assets/img/python.png';
import ImgMySql from '../assets/img/MySQL.png';
import ImgSqlServer from '../assets/img/sql-server.png';
import ImgPostgreSql from '../assets/img/postgresql.png';
import ImgMongo from '../assets/img/mongo.png';
import ImgGit from '../assets/img/git.png';
import ImgGitHub from '../assets/img/github.png';
import { ChangeTitle, changeTitle } from './Header';

function AdvanceProggersBar() {
	return (
		<>
			<div className="habilidades__progress--porcent advanced">
				<FormattedMessage id="skills.language.advanced" defaultMessage="Advanced" />
			</div>
		</>
	);
}

function IntermediateProggersBar() {
	return (
		<>
			<div className="habilidades__progress--porcent intermediate">
				<FormattedMessage id="skills.language.intermediate" defaultMessage="Intermediate" />
			</div>
		</>
	);
}

function BeginerProggersBar() {
	return (
		<>
			<div className="habilidades__progress--porcent beginner">
				<FormattedMessage id="skills.language.beginner" defaultMessage="Beginner" />
			</div>
		</>
	);
}

function TemplateLanguage(props) {
	return (
		<>
			<div className="habilidades__div">
				<div className="habilidades__div--img">
					<img className="habilidades__img" loading="lazy" title={props.altImg} src={props.img} alt={props.altImg} />
				</div>
				<div className="habilidades__div--text">
					<p>{props.title}</p>
					<div className="habilidades__progress">{props.experience}</div>
					<p>
						<FormattedMessage id="skills.language.experience" defaultMessage="Experience" /> {props.year}{' '}
						<FormattedMessage id="skills.language.years" defaultMessage="years" />
						{props.year <= 1 ? '' : 's'}
					</p>
				</div>
			</div>
		</>
	);
}

export default function LanguageSkills() {
	const nowDate = new Date().getFullYear();

	const skillsApprovedIn2020 = nowDate - new Date('2020/01/01').getFullYear();
	const skillsApprovedIn2021 = nowDate - new Date('2021/01/01').getFullYear();
	const skillsApprovedIn2022 = nowDate - new Date('2022/01/01').getFullYear();
	const skillsApprovedIn2023 = nowDate - new Date('2022/01/01').getFullYear();

	return (
		<>
			<ChangeTitle element="skills" defaultMessage="Skills" idJson="skills.title" />
			<div className="habilidades" id="skills">
				<h1 className="formulario__titulo informacion__titulo">
					<FormattedMessage id="skills.title" defaultMessage="Skills" />
				</h1>
				<div className="habilidades__content">
					<TemplateLanguage
						title="HTML"
						img={ImgHtml}
						altImg="Lenguaje html"
						year={skillsApprovedIn2020}
						experience={AdvanceProggersBar()}
					/>
					<TemplateLanguage
						title="CSS"
						img={ImgCss}
						altImg="Lenguaje css"
						year={skillsApprovedIn2020}
						experience={AdvanceProggersBar()}
					/>
					<TemplateLanguage
						title="MARKDOWN"
						img={ImgMD}
						altImg="Markdown"
						year={skillsApprovedIn2021}
						experience={IntermediateProggersBar()}
					/>
					<TemplateLanguage
						title="SASS"
						img={ImgSass}
						altImg="Lenguajes de hoja de estilos, complemento de css"
						year={skillsApprovedIn2021}
						experience={IntermediateProggersBar()}
					/>
					<TemplateLanguage
						title="BOOTSTRAP"
						img={ImgBootStrap}
						altImg="Framework para css"
						year={skillsApprovedIn2021}
						experience={IntermediateProggersBar()}
					/>
					<TemplateLanguage
						title="FIGMA"
						img={ImgFigma}
						altImg="Plataforma para realizar prototipos"
						year={skillsApprovedIn2021}
						experience={IntermediateProggersBar()}
					/>
					<TemplateLanguage
						title="JAVASCRIPT"
						img={ImgJS}
						altImg="Lenguaje javascript"
						year={skillsApprovedIn2020}
						experience={IntermediateProggersBar()}
					/>
					<TemplateLanguage
						title="REACT"
						img={ImgReact}
						altImg="Framework de JavaScript"
						year={skillsApprovedIn2022}
						experience={IntermediateProggersBar()}
					/>
					<TemplateLanguage
						title="ANGULAR"
						img={ImgAngular}
						altImg="Framework de JavaScript"
						year={skillsApprovedIn2023}
						experience={BeginerProggersBar()}
					/>
					<TemplateLanguage
						title="PHP"
						img={ImgPhp}
						altImg="Lenguaje php"
						year={skillsApprovedIn2020}
						experience={AdvanceProggersBar()}
					/>
					<TemplateLanguage
						title="LARAVEL"
						img={ImgLaravel}
						altImg="Framework de PHP"
						year={skillsApprovedIn2022}
						experience={BeginerProggersBar()}
					/>
					<TemplateLanguage
						title="JAVA"
						img={ImgJava}
						altImg="Lenguaje Java"
						year={skillsApprovedIn2022}
						experience={IntermediateProggersBar()}
					/>
					<TemplateLanguage
						title="C#"
						img={ImgCShar}
						altImg="Lenguaje C#"
						year={skillsApprovedIn2022}
						experience={BeginerProggersBar()}
					/>
					<TemplateLanguage
						title="PYTHON"
						img={ImgPython}
						altImg="Lenguaje Python"
						year={skillsApprovedIn2022}
						experience={BeginerProggersBar()}
					/>
					<TemplateLanguage
						title="MYSQL"
						img={ImgMySql}
						altImg="Lenguaje MySQL"
						year={skillsApprovedIn2020}
						experience={AdvanceProggersBar()}
					/>
					<TemplateLanguage
						title="SQL SERVER"
						img={ImgSqlServer}
						altImg="Lenguaje Sql-Server"
						year={skillsApprovedIn2022}
						experience={IntermediateProggersBar()}
					/>
					<TemplateLanguage
						title="POSTGRESQL"
						img={ImgPostgreSql}
						altImg="Lenguaje postgresql"
						year={skillsApprovedIn2022}
						experience={IntermediateProggersBar()}
					/>
					<TemplateLanguage
						title="MONGO DB"
						img={ImgMongo}
						altImg="Lenguaje MongoDB"
						year={skillsApprovedIn2022}
						experience={IntermediateProggersBar()}
					/>
					<TemplateLanguage
						title="GIT"
						img={ImgGit}
						altImg="Software de versionamiento"
						year={skillsApprovedIn2021}
						experience={AdvanceProggersBar()}
					/>
					<TemplateLanguage
						title="GITHUB"
						img={ImgGitHub}
						altImg="Controlador de versiones"
						year={skillsApprovedIn2021}
						experience={AdvanceProggersBar()}
					/>
				</div>
			</div>
		</>
	);
}
