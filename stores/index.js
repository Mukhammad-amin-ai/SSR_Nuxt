import { useCourseStore } from "./modules/course";
import { useLoginStore } from "./modules/auth/login";
import { useCommentStore } from "./modules/comments";
import {useTarifstore} from './modules/tariffs'
import { useCardStore } from "./modules/card"; 
import { useUserStore } from "./modules/user";

export {
    useCourseStore,
    useLoginStore,
    useCommentStore,
    useTarifstore,
    useCardStore,
    useUserStore
}
