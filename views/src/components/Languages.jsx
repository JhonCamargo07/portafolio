import React from 'react';
import { FormattedMessage } from 'react-intl';
import ImgHtml from '../assets/img/html.png';
import ImgCss from '../assets/img/css.png';
import ImgMD from '../assets/img/markdown.png';
import ImgSass from '../assets/img/sass.png';
import ImgBootStrap from '../assets/img/bootstrap.png';
import ImgFigma from '../assets/img/figma.png';
import ImgJS from '../assets/img/javascript.png';
import ImgReact from '../assets/img/react.png';
import ImgPhp from '../assets/img/php.png';
import ImgLaravel from '../assets/img/laravel.png';
import ImgJava from '../assets/img/java.png';
import ImgPython from '../assets/img/python.png';
import ImgMySql from '../assets/img/MySQL.png';
import ImgSqlServer from '../assets/img/sql-server.png';
import ImgPostgreSql from '../assets/img/postgresql.png';
import ImgMongo from '../assets/img/mongo.png';
import ImgGit from '../assets/img/git.png';
import ImgGitHub from '../assets/img/github.png';

export default function LanguageSkills() {
	const nowDate = new Date().getFullYear();

	const skillsApprovedIn2020 = nowDate - new Date('2020/01/01').getFullYear();
	const skillsApprovedIn2021 = nowDate - new Date('2021/01/01').getFullYear();
	const skillsApprovedIn2022 = nowDate - new Date('2022/01/01').getFullYear();

	return (
		<>
			<div className="habilidades" id="skills">
				<h1 className="formulario__titulo informacion__titulo">
					<FormattedMessage id="skills.title" defaultMessage="Skills" />
				</h1>
				<div className="habilidades__content">
					<div className="habilidades__div">
						<div className="habilidades__div--img">
							<img className="habilidades__img" loading="lazy" src={ImgHtml} alt="Lenguaje html" />
						</div>
						<div className="habilidades__div--text">
							<p>HTML</p>
							<div className="habilidades__progress">
								<div className="habilidades__progress--porcent advanced">
									<FormattedMessage id="skills.language.advanced" defaultMessage="Advanced" />
								</div>
							</div>
							<p>
								<FormattedMessage id="skills.language.experience" defaultMessage="Experience" />{' '}
								{skillsApprovedIn2020} <FormattedMessage id="skills.language.years" defaultMessage="years" />
								{skillsApprovedIn2020 <= 1 ? '' : 's'}
							</p>
						</div>
					</div>
					<div className="habilidades__div">
						<div className="habilidades__div--img">
							<img className="habilidades__img" loading="lazy" src={ImgCss} alt="Lenguaje css" />
						</div>
						<div className="habilidades__div--text">
							<p>CSS</p>
							<div className="habilidades__progress">
								<div className="habilidades__progress--porcent advanced">
									<FormattedMessage id="skills.language.advanced" defaultMessage="Advanced" />
								</div>
							</div>
							<p>
								<FormattedMessage id="skills.language.experience" defaultMessage="Experience" />{' '}
								{skillsApprovedIn2020} <FormattedMessage id="skills.language.years" defaultMessage="years" />
								{skillsApprovedIn2020 <= 1 ? '' : 's'}
							</p>
						</div>
					</div>
					<div className="habilidades__div">
						<div className="habilidades__div--img">
							<img className="habilidades__img" loading="lazy" src={ImgMD} alt="Markdown" />
						</div>
						<div className="habilidades__div--text">
							<p>MARKDOWN</p>
							<div className="habilidades__progress">
								<div className="habilidades__progress--porcent advanced">
									<FormattedMessage id="skills.language.advanced" defaultMessage="Advanced" />
								</div>
							</div>
							<p>
								<FormattedMessage id="skills.language.experience" defaultMessage="Experience" />{' '}
								{skillsApprovedIn2021} <FormattedMessage id="skills.language.years" defaultMessage="years" />
								{skillsApprovedIn2021 <= 1 ? '' : 's'}
							</p>
						</div>
					</div>
					<div className="habilidades__div">
						<div className="habilidades__div--img">
							<img
								className="habilidades__img"
								loading="lazy"
								src={ImgSass}
								alt="Lenguajes de hoja de estilos, complemento de css"
							/>
						</div>
						<div className="habilidades__div--text">
							<p>SASS</p>
							<div className="habilidades__progress">
								<div className="habilidades__progress--porcent intermediate">
									<FormattedMessage id="skills.language.intermediate" defaultMessage="Intermediate" />
								</div>
							</div>
							<p>
								<FormattedMessage id="skills.language.experience" defaultMessage="Experience" />{' '}
								{skillsApprovedIn2021} <FormattedMessage id="skills.language.years" defaultMessage="years" />
								{skillsApprovedIn2021 <= 1 ? '' : 's'}
							</p>
						</div>
					</div>
					<div className="habilidades__div">
						<div className="habilidades__div--img">
							<img className="habilidades__img" loading="lazy" src={ImgBootStrap} alt="Framework para css" />
						</div>
						<div className="habilidades__div--text">
							<p>BOOTSTRAP</p>
							<div className="habilidades__progress">
								<div className="habilidades__progress--porcent intermediate">
									<FormattedMessage id="skills.language.intermediate" defaultMessage="Intermediate" />
								</div>
							</div>
							<p>
								<FormattedMessage id="skills.language.experience" defaultMessage="Experience" />{' '}
								{skillsApprovedIn2021} <FormattedMessage id="skills.language.years" defaultMessage="years" />
								{skillsApprovedIn2021 <= 1 ? '' : 's'}
							</p>
						</div>
					</div>
					<div className="habilidades__div">
						<div className="habilidades__div--img">
							<img className="habilidades__img" loading="lazy" src={ImgFigma} alt="Framework para css" />
						</div>
						<div className="habilidades__div--text">
							<p>FIGMA</p>
							<div className="habilidades__progress">
								<div className="habilidades__progress--porcent intermediate">
									<FormattedMessage id="skills.language.intermediate" defaultMessage="Intermediate" />
								</div>
							</div>
							<p>
								<FormattedMessage id="skills.language.experience" defaultMessage="Experience" />{' '}
								{skillsApprovedIn2022} <FormattedMessage id="skills.language.years" defaultMessage="years" />
								{skillsApprovedIn2022 <= 1 ? '' : 's'}
							</p>
						</div>
					</div>
					<div className="habilidades__div">
						<div className="habilidades__div--img">
							<img className="habilidades__img" loading="lazy" src={ImgJS} alt="Lenguaje javascript" />
						</div>
						<div className="habilidades__div--text">
							<p>JAVASCRIPT</p>
							<div className="habilidades__progress">
								<div className="habilidades__progress--porcent intermediate">
									<FormattedMessage id="skills.language.intermediate" defaultMessage="Intermediate" />
								</div>
							</div>
							<p>
								<FormattedMessage id="skills.language.experience" defaultMessage="Experience" />{' '}
								{skillsApprovedIn2020} <FormattedMessage id="skills.language.years" defaultMessage="years" />
								{skillsApprovedIn2020 <= 1 ? '' : 's'}
							</p>
						</div>
					</div>
					<div className="habilidades__div">
						<div className="habilidades__div--img">
							<img className="habilidades__img" loading="lazy" src={ImgReact} alt="Framework de JavaScript" />
						</div>
						<div className="habilidades__div--text">
							<p>REACT</p>
							<div className="habilidades__progress">
								<div className="habilidades__progress--porcent beginner">
									<FormattedMessage id="skills.language.beginner" defaultMessage="Beginner" />
								</div>
							</div>
							<p>
								<FormattedMessage id="skills.language.experience" defaultMessage="Experience" />{' '}
								{skillsApprovedIn2022} <FormattedMessage id="skills.language.years" defaultMessage="years" />
								{skillsApprovedIn2022 <= 1 ? '' : 's'}
							</p>
						</div>
					</div>
					<div className="habilidades__div">
						<div className="habilidades__div--img">
							<img className="habilidades__img" loading="lazy" src={ImgPhp} alt="Lenguaje php" />
						</div>
						<div className="habilidades__div--text">
							<p>PHP</p>
							<div className="habilidades__progress">
								<div className="habilidades__progress--porcent advanced">
									<FormattedMessage id="skills.language.advanced" defaultMessage="Advanced" />
								</div>
							</div>
							<p>
								<FormattedMessage id="skills.language.experience" defaultMessage="Experience" />{' '}
								{skillsApprovedIn2020} <FormattedMessage id="skills.language.years" defaultMessage="years" />
								{skillsApprovedIn2020 <= 1 ? '' : 's'}
							</p>
						</div>
					</div>
					<div className="habilidades__div">
						<div className="habilidades__div--img">
							<img className="habilidades__img" loading="lazy" src={ImgLaravel} alt="Lenguaje java" />
						</div>
						<div className="habilidades__div--text">
							<p>LARAVEL</p>
							<div className="habilidades__progress">
								<div className="habilidades__progress--porcent beginner">
									<FormattedMessage id="skills.language.beginner" defaultMessage="beginner" />
								</div>
							</div>
							<p>
								<FormattedMessage id="skills.language.experience" defaultMessage="Experience" />{' '}
								{skillsApprovedIn2022} <FormattedMessage id="skills.language.years" defaultMessage="years" />
								{skillsApprovedIn2022 <= 1 ? '' : 's'}
							</p>
						</div>
					</div>
					<div className="habilidades__div">
						<div className="habilidades__div--img">
							<img className="habilidades__img" loading="lazy" src={ImgJava} alt="Lenguaje java" />
						</div>
						<div className="habilidades__div--text">
							<p>JAVA</p>
							<div className="habilidades__progress">
								<div className="habilidades__progress--porcent intermediate">
									<FormattedMessage id="skills.language.intermediate" defaultMessage="Intermediate" />
								</div>
							</div>
							<p>
								<FormattedMessage id="skills.language.experience" defaultMessage="Experience" />{' '}
								{skillsApprovedIn2022} <FormattedMessage id="skills.language.years" defaultMessage="years" />
								{skillsApprovedIn2022 <= 1 ? '' : 's'}
							</p>
						</div>
					</div>
					<div className="habilidades__div">
						<div className="habilidades__div--img">
							<img className="habilidades__img" loading="lazy" src={ImgPython} alt="Lenguaje Python" />
						</div>
						<div className="habilidades__div--text">
							<p>PYTHON</p>
							<div className="habilidades__progress">
								<div className="habilidades__progress--porcent beginner">
									<FormattedMessage id="skills.language.beginner" defaultMessage="beginner" />
								</div>
							</div>
							<p>
								<FormattedMessage id="skills.language.experience" defaultMessage="Experience" />{' '}
								{skillsApprovedIn2022} <FormattedMessage id="skills.language.years" defaultMessage="years" />
								{skillsApprovedIn2022 <= 1 ? '' : 's'}
							</p>
						</div>
					</div>
					<div className="habilidades__div">
						<div className="habilidades__div--img">
							<img className="habilidades__img" loading="lazy" src={ImgMySql} alt="Lenguaje MySQL" />
						</div>
						<div className="habilidades__div--text">
							<p>MYSQL</p>
							<div className="habilidades__progress">
								<div className="habilidades__progress--porcent advanced">
									<FormattedMessage id="skills.language.advanced" defaultMessage="Advanced" />
								</div>
							</div>
							<p>
								<FormattedMessage id="skills.language.experience" defaultMessage="Experience" />{' '}
								{skillsApprovedIn2020} <FormattedMessage id="skills.language.years" defaultMessage="years" />
								{skillsApprovedIn2020 <= 1 ? '' : 's'}
							</p>
						</div>
					</div>
					<div className="habilidades__div">
						<div className="habilidades__div--img">
							<img className="habilidades__img" loading="lazy" src={ImgSqlServer} alt="Lenguaje Sql-Server" />
						</div>
						<div className="habilidades__div--text">
							<p>SQL SERVER</p>
							<div className="habilidades__progress">
								<div className="habilidades__progress--porcent intermediate">
									<FormattedMessage id="skills.language.intermediate" defaultMessage="Intermediate" />
								</div>
							</div>
							<p>
								<FormattedMessage id="skills.language.experience" defaultMessage="Experience" />{' '}
								{skillsApprovedIn2022} <FormattedMessage id="skills.language.years" defaultMessage="years" />
								{skillsApprovedIn2022 <= 1 ? '' : 's'}
							</p>
						</div>
					</div>
					<div className="habilidades__div">
						<div className="habilidades__div--img">
							<img className="habilidades__img" loading="lazy" src={ImgPostgreSql} alt="Lenguaje postgresql" />
						</div>
						<div className="habilidades__div--text">
							<p>POSTGRESQL</p>
							<div className="habilidades__progress">
								<div className="habilidades__progress--porcent beginner">
									<FormattedMessage id="skills.language.beginner" defaultMessage="beginner" />
								</div>
							</div>
							<p>
								<FormattedMessage id="skills.language.experience" defaultMessage="Experience" />{' '}
								{skillsApprovedIn2022} <FormattedMessage id="skills.language.years" defaultMessage="years" />
								{skillsApprovedIn2022 <= 1 ? '' : 's'}
							</p>
						</div>
					</div>
					<div className="habilidades__div">
						<div className="habilidades__div--img">
							<img className="habilidades__img" loading="lazy" src={ImgMongo} alt="Lenguaje MongoDB" />
						</div>
						<div className="habilidades__div--text">
							<p>MONGO DB</p>
							<div className="habilidades__progress">
								<div className="habilidades__progress--porcent beginner">
									<FormattedMessage id="skills.language.beginner" defaultMessage="Beginner" />
								</div>
							</div>
							<p>
								<FormattedMessage id="skills.language.experience" defaultMessage="Experience" />{' '}
								{skillsApprovedIn2022} <FormattedMessage id="skills.language.years" defaultMessage="years" />
								{skillsApprovedIn2022 <= 1 ? '' : 's'}
							</p>
						</div>
					</div>
					<div className="habilidades__div">
						<div className="habilidades__div--img">
							<img className="habilidades__img" loading="lazy" src={ImgGit} alt="Software de versionamiento" />
						</div>
						<div className="habilidades__div--text">
							<p>GIT</p>
							<div className="habilidades__progress">
								<div className="habilidades__progress--porcent advanced">
									<FormattedMessage id="skills.language.advanced" defaultMessage="Advanced" />
								</div>
							</div>
							<p>
								<FormattedMessage id="skills.language.experience" defaultMessage="Experience" />{' '}
								{skillsApprovedIn2021} <FormattedMessage id="skills.language.years" defaultMessage="years" />
								{skillsApprovedIn2021 <= 1 ? '' : 's'}
							</p>
						</div>
					</div>
					<div className="habilidades__div">
						<div className="habilidades__div--img">
							<img className="habilidades__img" loading="lazy" src={ImgGitHub} alt="Controlador de versiones" />
						</div>
						<div className="habilidades__div--text">
							<p>GITHUB</p>
							<div className="habilidades__progress">
								<div className="habilidades__progress--porcent advanced">
									<FormattedMessage id="skills.language.advanced" defaultMessage="Advanced" />
								</div>
							</div>
							<p>
								<FormattedMessage id="skills.language.experience" defaultMessage="Experience" />{' '}
								{skillsApprovedIn2021} <FormattedMessage id="skills.language.years" defaultMessage="years" />
								{skillsApprovedIn2021 <= 1 ? '' : 's'}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
