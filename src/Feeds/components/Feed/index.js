import React, { useState } from "react";
import moment from "moment";
import { withRouter } from "react-router-dom";
import {
  FeedWrapper,
  FeedOwnerImg,
  ContentWrapper,
  IconWrapper,
  ActionButtonsWrapper,
  ActionButtonHover,
  CompanyTags,
  Tags
} from "./styled";

// importing icons/images for app , sttructuring them into a separate file into an object
// and exporting from there will be a better idea
import anonymousIcon from "../../../assets/icons/UseranonymousDP.svg";
import verifiedIcon from "../../../assets/icons/verified-icon.svg";
import helpfullIcon from "../../../assets/icons/helpfullIcon.svg";
import microsoft from "../../../assets/images/microsoft.png";
import fblogo from "../../../assets/icons/fb icon.svg";
import tlogo from "../../../assets/icons/twitter icn.svg";
import linlogo from "../../../assets/icons/share icn.svg";
import likecount from "../../../assets/icons/like count icn.svg";
import likereaction from "../../../assets/icons/like reaction icn.svg";
import heartcount from "../../../assets/icons/heart count.svg";
import heartreaction from "../../../assets/icons/heart reaction icn.svg";
import clapcount from "../../../assets/icons/clap count.svg";
import clapreaction from "../../../assets/icons/Clap reaction icn.svg";
import dislikereaction from "../../../assets/icons/dislike reaction icn.svg";
import superreaction from "../../../assets/icons/superb icn.svg";

//splitting this component into further components could have been a better idea.
//time constraint :P
const Feed = ({ feed, history, reactToFeed }) => {
  const {
    id: feedId,
    userName,
    companyName,
    userImage,
    title,
    description,
    createdDate,
    commentCount,
    AviewCount,
    likeCount,
    metaTags,
    isAnonymous,
    userVerified
  } = feed;
  const [isHelpButtonsVisible, setIsHelpButtonsVisible] = useState(false);

  // both tags & metatags have relevant data to display question tags, i have chosen metaTags as
  //tags are missing in few cases unlike metatags
  const renderTags = () =>
    metaTags && metaTags.map(({ content }) => <Tags>#{content}</Tags>);

  // couldn't find any data in api to generate these tags so, hardcoded for now
  const renderCompanyNameTagsWithQuestions = () => (
    <CompanyTags className="flex items-center mb-2">
      <IconWrapper className="text-gray-600 text-sm">
        <i className="far fa-building mr-1"></i>
        <span>Questions for</span>
      </IconWrapper>
      <IconWrapper className="text-gray-600 text-sm flex">
        <img src={microsoft} className="ml-2 w-4 h-4" alt="" />
        <span className="mx-1">Microsoft</span>
      </IconWrapper>
    </CompanyTags>
  );

  return (
    <FeedWrapper className=" bg-white border p-3 rounded">
      {renderCompanyNameTagsWithQuestions()}
      <div className="flex justify-between pt-2">
        <div className="flex">
          <FeedOwnerImg
            src={isAnonymous ? anonymousIcon : userImage}
            alt=""
            className="rounded-full"
          />
          <div className="ml-3 leading-none">
            <h3 className="font-semibold text-black-600 text-sm">
              {userName}
              {userVerified && (
                <img src={verifiedIcon} className="float-right ml-2" alt="" />
              )}
            </h3>
            <p className="text-sm mt-1 text-gray-600">{companyName}</p>
          </div>
        </div>
        <div className="self-end text-xs text-gray-500 ">{`Asked ${moment(
          createdDate
        ).fromNow()}`}</div>
      </div>

      <ContentWrapper
        onClick={() => {
          history.push(`/${feedId}`);
        }}
      >
        <h1 className="font-bold text-black text-xl my-2 leading-tight">
          {title}
        </h1>
        <p className="text-sm text-gray-800 tracking-wide">{description}</p>
        <p className="text-blue-600 text-sm underline self-end my-1">
          see more
        </p>
      </ContentWrapper>
      <ActionButtonsWrapper className="flex flex-row justify-between items-center mt-4 border-b-2 pb-3 relative">
        <div className="flex flex-row">
          <IconWrapper
            className="text-green-600 mr-2 flex"
            onClick={() => setIsHelpButtonsVisible(!isHelpButtonsVisible)}
          >
            <img src={helpfullIcon} alt="" className="mr-2" />
            <span className="text-sm">Helpful</span>
          </IconWrapper>
          <IconWrapper className="text-blue-600 mr-4">
            <i className="fas fa-edit mr-2"></i>
            <span className="text-sm">Answer</span>
          </IconWrapper>
        </div>
        <div className="flex flex-row text-gray-600 text-xl items-center">
          <IconWrapper>
            <img src={fblogo} alt="" />
          </IconWrapper>
          <IconWrapper>
            <img src={tlogo} alt="" className="ml-3" />
          </IconWrapper>
          <IconWrapper>
            <img src={linlogo} alt="" className="ml-3" />
          </IconWrapper>
          <IconWrapper>
            <i className="fas fa-ellipsis-h ml-3"></i>
          </IconWrapper>
        </div>
        {isHelpButtonsVisible && (
          <ActionButtonHover
            className="p-2 bordered-gray-500 rounded container-absolute"
            show={isHelpButtonsVisible}
          >
            <div className="flex">
              <IconWrapper
                className="text-blue-600 flex items-center justify-around mr-2"
                onClick={() => reactToFeed({ feedId, type_reaction: "like" })}
              >
                <img src={likereaction} alt="" className="ml-3" />
              </IconWrapper>
              <IconWrapper
                className="text-red-600 flex items-center justify-around mr-2"
                onClick={() => reactToFeed({ feedId, type_reaction: "heart" })}
              >
                <img src={heartreaction} alt="" className="ml-3" />
              </IconWrapper>
              <IconWrapper
                className="text-green-600 flex items-center justify-around mr-2"
                onClick={() => reactToFeed({ feedId, type_reaction: "clap" })}
              >
                <img src={clapreaction} alt="" className="ml-3" />
              </IconWrapper>
              <IconWrapper className="text-green-600 flex items-center justify-around mr-2">
                <img src={superreaction} alt="" className="ml-3" />
              </IconWrapper>
              <IconWrapper className="text-green-600 flex items-center justify-around mr-2">
                <img src={dislikereaction} alt="" className="ml-3" />
              </IconWrapper>
            </div>
          </ActionButtonHover>
        )}
      </ActionButtonsWrapper>
      <div className="mt-3 flex justify-between items-center">
        <div>{renderTags()}</div>
        <div className="flex">
          <IconWrapper className="text-blue-600 flex items-center justify-around mr-2">
            <img src={likecount} alt="" />
            <span className="text-xs">{AviewCount}</span>
          </IconWrapper>
          <IconWrapper className="text-red-600 flex items-center justify-around mr-2">
            <img src={heartcount} alt="" />
            <span className="text-xs">{likeCount}</span>
          </IconWrapper>
          <IconWrapper className="text-green-600 flex items-center justify-around mr-2">
            <img src={clapcount} alt="" />
            <span className="text-xs">{commentCount}</span>
          </IconWrapper>
          <IconWrapper className="text-gray-600 flex items-center justify-around mr-2">
            <i
              className="fas fa-circle text-xs mr-1"
              style={{ padding: "3px" }}
            ></i>
            <span className="text-xs text-blue-600">2 Answers</span>
          </IconWrapper>
        </div>
      </div>
    </FeedWrapper>
  );
};

export default withRouter(Feed);
