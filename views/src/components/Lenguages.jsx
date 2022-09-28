import React from 'react';
import ImgHtml from '../assets/img/html.png';
import ImgCss from '../assets/img/css.png';
import ImgMD from '../assets/img/markdown.png';
import ImgSass from '../assets/img/sass.png';
import ImgBootStrap from '../assets/img/bootstrap.png';
import ImgJS from '../assets/img/javascript.png';
import ImgReact from '../assets/img/react.png';
import ImgPhp from '../assets/img/php.png';
import ImgJava from '../assets/img/java.png';
import ImgPython from '../assets/img/python.png';
import ImgMySql from '../assets/img/MySQL.png';
import ImgSqlServer from '../assets/img/sql-server.png';
import ImgPostgreSql from '../assets/img/postgresql.png';
import ImgMongo from '../assets/img/mongo.png';
import ImgGit from '../assets/img/git.png';
import ImgGitHub from '../assets/img/github.png';

export default function Lenguages() {
	return (
		<>
			<div className="habilidades" id="habilidades">
				<h1 className="formulario__titulo informacion__titulo">Habilidades</h1>
				{/* <!--*=========================== Imagenes de los lenguajes ===========================--> */}
				<div className="habilidades__imagenes">
					<div className="habilidades__img--div">
						<img className="habilidades__img" loading="lazy" src={ImgHtml} alt="Lenguaje html" />
					</div>
					<div className="habilidades__img--div">
						<img className="habilidades__img" loading="lazy" src={ImgCss} alt="Lenguaje css" />
					</div>
					<div className="habilidades__img--div">
						<img className="habilidades__img" loading="lazy" src={ImgMD} alt="Markdown" />
					</div>
					<div className="habilidades__img--div">
						<img
							className="habilidades__img"
							loading="lazy"
							src={ImgSass}
							alt="Lenguajes de hoja de estilos, complemento de css"
						/>
					</div>
					<div className="habilidades__img--div">
						<img className="habilidades__img" loading="lazy" src={ImgBootStrap} alt="Framework para css" />
					</div>
					<div className="habilidades__img--div">
						<img className="habilidades__img" loading="lazy" src={ImgJS} alt="Lenguaje javascript" />
					</div>
					<div className="habilidades__img--div">
						<img className="habilidades__img" loading="lazy" src={ImgReact} alt="Framework de JavaScript" />
					</div>
					<div className="habilidades__img--div">
						<img className="habilidades__img" loading="lazy" src={ImgPhp} alt="Lenguaje php" />
					</div>
					<div className="habilidades__img--div">
						<img className="habilidades__img" loading="lazy" src={ImgJava} alt="Lenguaje java" />
					</div>
					<div className="habilidades__img--div">
						<img className="habilidades__img" loading="lazy" src={ImgPython} alt="Lenguaje Python" />
					</div>
					<div className="habilidades__img--div">
						<img className="habilidades__img" loading="lazy" src={ImgMySql} alt="Lenguaje MySQL" />
					</div>
					<div className="habilidades__img--div">
						<img className="habilidades__img" loading="lazy" src={ImgSqlServer} alt="Lenguaje Sql-Server" />
					</div>
					<div className="habilidades__img--div">
						<img className="habilidades__img" loading="lazy" src={ImgPostgreSql} alt="Lenguaje postgresql" />
					</div>
					<div className="habilidades__img--div">
						<img className="habilidades__img" loading="lazy" src={ImgMongo} alt="Lenguaje MongoDB" />
					</div>
					<div className="habilidades__img--div">
						<img className="habilidades__img" loading="lazy" src={ImgGit} alt="Software de versionamiento" />
					</div>
					<div className="habilidades__img--div">
						<img className="habilidades__img" loading="lazy" src={ImgGitHub} alt="Controlador de versiones" />
					</div>
				</div>
			</div>
		</>
	);
}
