import React, { useMemo } from "react";

interface TagListProps {
  tags: Array<string>;
}

const HIKE_TAG = "hike";
const SCENIC_TAG = "scenic";
const UNESCO_TAG = "unesco";
const HEART_TAG = "heart";
const CULTURE_TAG = "culture";

const TagList: React.FC<TagListProps> = ({ tags }) => {
  const htmlTags = useMemo(() => {
    if (!tags) {
      return undefined;
    }

    return tags.map((tag, index) => {
      let htmlTag;
      switch (tag) {
        case HIKE_TAG:
          htmlTag = (
            <span className="tag is-success is-light" key={`tag-${index}`}>
              🏞️ Randonnée
            </span>
          );
          break;
        case SCENIC_TAG:
          htmlTag = (
            <span className="tag is-warning is-light" key={`tag-${index}`}>
              ⭐ Panorama exceptionnel
            </span>
          );
          break;
        case UNESCO_TAG:
          htmlTag = (
            <span className="tag is-link is-light" key={`tag-${index}`}>
              🌎 Patrimoine mondial UNESCO
            </span>
          );
          break;
        case HEART_TAG:
          htmlTag = (
            <span className="tag is-danger is-light" key={`tag-${index}`}>
              ❤️ Coup de coeur
            </span>
          );
          break;
        case CULTURE_TAG:
          htmlTag = (
            <span className="tag is-info is-light" key={`tag-${index}`}>
              🏛️ Culture
            </span>
          );
          break;
        default:
          htmlTag = (
            <span className="tag is-light" key={`tag-${index}`}>
              {tag}
            </span>
          );
          break;
      }
      return htmlTag;
    });
  }, [tags]);

  return <>{htmlTags && <div className="tags my-2">{htmlTags}</div>}</>;
};

export default TagList;
