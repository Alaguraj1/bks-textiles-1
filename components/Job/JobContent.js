import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const FaqContent = (props) => {
  const { data } = props;
  const [title, setTitle] = useState("");
  console.log("✌️data --->", data);

  useEffect(() => {
    localStorage.setItem("title", title);
    // document.getElementById(title).value=title ;
  }, [title]);

  return (
    <>
      <div className="faq-area ptb-100 career mt-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <h1>Job Vacancy</h1>
              <br></br>
              <div className="faq-accordion">
                <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                  {data?.map((item) => (
                    <AccordionItem
                      uuid={item?.id}
                      onClick={() => setTitle(item?.title)}
                    >
                      <AccordionItemHeading>
                        <AccordionItemButton>{item?.title}</AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div
                          dangerouslySetInnerHTML={{ __html: item?.content }}
                        ></div>
                        <Link href={`/apply-now/`}>
                          <span class="btn btn-primary">Apply Now</span>
                        </Link>
                      </AccordionItemPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqContent;
