import { Typography, Collapse } from "antd";
import React from "react";
import Page from "../components/page";
import {
    ScreenSize,
    useResponsiveness,
  } from "../components/use-responsiveness";
import { constants } from "../constants";

const { Panel } = Collapse;

const TestimonialsPage = () => {
    return (
        <Page title="Testimonials" >
            <Collapse defaultActiveKey={['1']}>
                <Panel 
                header="From Jon and Laura" 
                key="1"
                >
                    <p>“Brewhaus has been a blessing to Claudia and to our family. 
                        Brewhaus has given Claudia the opportunity to develop job skills,
                        and grow in confidence through interactions with peers and the 
                        general public. Working at Brewhaus allows Claudia to earn her 
                        own money through meaningful employment and gives her a sense of 
                        purpose. We appreciate that Claudia works with an organization 
                        that maintains high expectations and standards of quality, but 
                        also is a safe place where Claudia feels like she belongs. The 
                        encouraging atmosphere at Brewhaus has helped alleviate Claudia’s 
                        anxiety about employment and has fostered her sense of belonging 
                        to a community.”
                    </p>
                </Panel>
            
                <Panel 
                header="From Claudia" 
                key="2"
                >
                    <p>“I like working at Brewhaus because they teach 
                        you job skills and they help you work on issues 
                        like self-confidence. Or, if you are shy, they 
                        help you overcome that by having you interact 
                        with other people. They encourage you to ask for             
                        help when you need it. They are patient and calm 
                        at Brewhaus. If you make a mistake, they don’t 
                        get mad at you; they just help you fix it. 
                        Sometimes I feel like I have a hard time fitting 
                        in with typical people, but at Brewhaus I feel 
                        like I belong.” 
                    </p>
                </Panel>
            
                <Panel 
                header="From Whitney & Chris and Angie P." 
                key="3"
                >
                    <p>“Whitney enjoys her Brewhaus Bakery job: ingredients, 
                        materials to packaged product work that aligns with her 
                        skill set. Brewhaus provides a meaningful, productive, 
                        accepting and safe work environment; Whitney says 
                        working there makes her feel happy. Whitney has been a 
                        Brewhaus employee for about 6 years and she wants to 
                        work there for many more! We’re so grateful for her 
                        Brewhaus job!” 
                    </p>
                </Panel>
            
                <Panel 
                header="From Eric R. & Tina and Mark Russell" 
                key="4"
                >
                <p>“Eric just finished his journey with the school 
                    system last May. It was difficult to find a job 
                    through the school and DD services, but now is 
                    being paid and has meaningful work at Brewhaus 
                    Bakery. Brewhaus offers Eric an improved quality 
                    of life, an ability to earn his own income, 
                    improved self confidence, and a sense of 
                    community.  We are grateful that Brewhaus 
                    gave Eric this opportunity!” 
                </p>
                </Panel>
            
                <Panel 
                header="From Eric P. & Sharon and John Powers" 
                key="5"
                >
                <p>“Eric is talking more, definitely more social 
                    and outgoing because of Brewhaus; he has more of 
                    an opportunity to be with other people besides 
                    his family; he feels very comfortable at 
                    Brewhaus, likes his friends there, and is 
                    proud of his work! He doesn’t want to work 
                    anywhere else!” 
                </p>
                </Panel>

                    
                <Panel 
                header="From Natalie" 
                key="6"
                >
                    <p>“We have a lot of stuff to do at Brewhaus 
                        Bakery; a lot of jobs to do and a lot of 
                        opportunities. I like baking and making dog 
                        treats and figuring out what to do on a job. 
                        It’s good to have our helpers and I like when 
                        we have school visits and volunteers to the 
                        bakery. It’s pretty fun to go to events and 
                        talk to people.”
                    </p>
                </Panel>
            </Collapse>
        </Page>
    )
}

export default TestimonialsPage;
