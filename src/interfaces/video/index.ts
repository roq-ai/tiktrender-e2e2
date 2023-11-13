import { HashtagInterface } from 'interfaces/hashtag';
import { VideoTrendInterface } from 'interfaces/video-trend';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface VideoInterface {
  id?: string;
  title: string;
  description?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  hashtag?: HashtagInterface[];
  video_trend?: VideoTrendInterface[];
  user?: UserInterface;
  _count?: {
    hashtag?: number;
    video_trend?: number;
  };
}

export interface VideoGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  user_id?: string;
}
