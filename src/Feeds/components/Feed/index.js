import React, { useState } from "react";
import moment from "moment";
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
const Feed = ({ feed }) => {
  const {
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
    userVerified,
    isAnonymous
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
        <span>Questions for </span>
      </IconWrapper>
      <IconWrapper className="text-gray-600 text-sm">
        <i className="far fa-building mx-2"></i>
        <span>Microsoft</span>
      </IconWrapper>
      <IconWrapper className="text-gray-600 text-sm">
        <i className="far fa-building mx-2"></i>
        <span>Amazon</span>
      </IconWrapper>
    </CompanyTags>
  );

  return (
    <FeedWrapper className=" bg-white border p-4 rounded">
      {renderCompanyNameTagsWithQuestions()}
      <div className="flex justify-between pt-2">
        <div className="flex">
          <FeedOwnerImg src={userImage} alt="" className="rounded-full" />
          <div className="ml-3 leading-none">
            <h3 className="font-bold text-blue-600 text-lg">
              {userName}
              {isAnonymous && (
                <i className="fas fa-check-circle ml-2 text-blue-600"></i>
              )}
            </h3>
            <p className="text-sm mt-1 text-gray-600">{companyName}</p>
          </div>
        </div>
        <div className="self-end text-xs text-gray-500 ">{`Asked ${moment(
          createdDate
        ).fromNow()}`}</div>
      </div>

      <ContentWrapper>
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
            className="text-green-600 mr-4"
            onClick={() => setIsHelpButtonsVisible(!isHelpButtonsVisible)}
          >
            <i className="fas fa-plus-square mr-2"></i>
            <span className="text-sm">Helpful</span>
          </IconWrapper>
          <IconWrapper className="text-blue-600 mr-4">
            <i className="fas fa-edit mr-2"></i>
            <span className="text-sm">Answer</span>
          </IconWrapper>
        </div>
        <div className="flex flex-row text-gray-600 text-xl items-center">
          <IconWrapper>
            <i className="fab fa-facebook-square "></i>
          </IconWrapper>
          <IconWrapper>
            <i className="fab fa-twitter ml-4"></i>
          </IconWrapper>
          <IconWrapper>
            <i className="fas fa-share-square ml-4"></i>
          </IconWrapper>
          <IconWrapper>
            <i className="fas fa-ellipsis-h ml-4"></i>
          </IconWrapper>
        </div>
        {isHelpButtonsVisible && (
          <ActionButtonHover
            className="p-2 bordered-gray-500 rounded container-absolute"
            show={isHelpButtonsVisible}
          >
            <div className="flex">
              <IconWrapper className="text-blue-600 flex items-center justify-around mr-2">
                <i className="far fa-thumbs-up bg-blue-200 rounded-full p-1 text-xl mr-1"></i>
              </IconWrapper>
              <IconWrapper className="text-red-600 flex items-center justify-around mr-2">
                <i className="far fa-heart bg-red-200 rounded-full p-1 text-xl mr-1"></i>
              </IconWrapper>
              <IconWrapper className="text-green-600 flex items-center justify-around mr-2">
                <i className="fas fa-sign-language bg-green-200 rounded-full p-1 text-xl mr-1"></i>
              </IconWrapper>
              <IconWrapper className="text-green-600 flex items-center justify-around mr-2">
                <i className="far fa-hand-point-up bg-green-200 rounded-full p-1 text-xl mr-1"></i>
              </IconWrapper>
              <IconWrapper className="text-green-600 flex items-center justify-around mr-2">
                <i className="fas fa-thumbs-down bg-green-200 rounded-full p-1 text-xl"></i>
              </IconWrapper>
            </div>
          </ActionButtonHover>
        )}
      </ActionButtonsWrapper>
      <div className="mt-3 flex justify-between items-center">
        <div>{renderTags()}</div>
        <div className="flex">
          <IconWrapper className="text-blue-600 flex items-center justify-around mr-2">
            <i className="far fa-thumbs-up bg-blue-200 rounded-full p-1 text-xl mr-1"></i>
            <span className="text-xs">{AviewCount}</span>
          </IconWrapper>
          <IconWrapper className="text-red-600 flex items-center justify-around mr-2">
            <i className="far fa-heart bg-red-200 rounded-full p-1 text-xl mr-1"></i>
            <span className="text-xs">{likeCount}</span>
          </IconWrapper>
          <IconWrapper className="text-green-600 flex items-center justify-around mr-2">
            <i className="fas fa-sign-language bg-green-200 rounded-full p-1 text-xl mr-1"></i>
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

export default Feed;
