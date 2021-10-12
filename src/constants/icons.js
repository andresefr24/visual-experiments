import React from "react";
import { Google, Flutter, Gitlab, Jquery, Slack } from "styled-icons/boxicons-logos";
import { Plus, Eye, Menu, Star, RoundBrush } from "styled-icons/entypo";
import {
  Trash,
  Save,
  ChevronUp,
  ChevronDown,
} from "styled-icons/boxicons-solid";
import { EditOutline, CloseOutline } from "styled-icons/evaicons-outline";
import { Duplicate, Check, Minus, Infinite } from "styled-icons/boxicons-regular";
import { Play } from "styled-icons/feather";
import { Star as OutlineStar } from "styled-icons/remix-line";
import { Starburst } from "styled-icons/typicons";
import {Toyota} from "@styled-icons/simple-icons";

export default function Icons(type) {
  switch (type) {
    case "google":
      return <Google />;
    case "logo":
      return <Play />;
    case "plus":
      return <Plus />;
    case "minus":
      return <Minus />;
    case "trash":
      return <Trash />;
    case "eye":
      return <Eye />;
    case "edit":
      return <EditOutline />;
    case "close":
      return <CloseOutline />;
    case "chevronUp":
      return <ChevronUp />;
    case "chevronDown":
      return <ChevronDown />;
    case "duplicate":
      return <Duplicate />;
    case "menu":
      return <Menu />;
    case "save":
      return <Save />;
    case "check":
      return <Check />;
    case "star":
      return <Star />;
    case "outline-star":
      return <OutlineStar />;
    case "starburst":
      return <Starburst />;
    case "brush":
      return <RoundBrush />;
    case "infinite":
      return <Infinite />;
    case "toyota":
      return <Toyota />;
    case "flutter":
      return <Flutter />;
    case "gitlab":
      return <Gitlab />;
    case "jquery":
      return <Jquery />;
    case "slack":
      return <Slack />;
    default:
      return <div />;
  }
}
