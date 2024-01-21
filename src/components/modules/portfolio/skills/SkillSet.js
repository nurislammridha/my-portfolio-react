/**
 * External dependencies.
 */
import React from "react";

/**
 * Internal dependencies.
 */
import react from "../../../../assets/img/skills/react.png";
import reactNative from "../../../../assets/img/skills/react-native.png";
import laravel from "../../../../assets/img/skills/laravel.png";
import wordpress from "../../../../assets/img/skills/wordpress.png";
import php from "../../../../assets/img/skills/php.png";
import vue from "../../../../assets/img/skills/vue.png";
import bootstrap from "../../../../assets/img/skills/bootstrap.png";
import tailwind from "../../../../assets/img/skills/tailwind.png";
import dotnet from "../../../../assets/img/skills/dotnet.png";
import js from "../../../../assets/img/skills/js.png";
import mongodb from "../../../../assets/img/skills/mongodb.jpg";
import node from "../../../../assets/img/skills/node.png";
import graphql from "../../../../assets/img/skills/graphql.jpg";
import "./skills.css";
import Skill from "./Skill";

const SkillSet = () => {
    return (
        <div className="skil-set-area">

            <Skill img={js} name="JavaScript" exp_level={85} />
            <Skill img={react} name="React JS Library" exp_level={95} />
            <Skill img={reactNative} name="React Native" exp_level={90} />
            <Skill img={graphql} name="GraphQL" exp_level={80} />
            <Skill img={node} name="Node JS" exp_level={80} />
            <Skill img={mongodb} name="Mongo DB" exp_level={80} />
            <Skill img={tailwind} name="Tailwind CSS" exp_level={100} />
            <Skill img={bootstrap} name="Bootstrap CSS Framework" exp_level={100} />
            {/* <Skill img={php} name="PHP" exp_level={40} />
            <Skill img={laravel} name="Laravel PHP Framework" exp_level={35} /> */}
        </div>
    );
};

export default SkillSet;
