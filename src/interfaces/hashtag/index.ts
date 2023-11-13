import { VideoInterface } from 'interfaces/video';
import { GetQueryInterface } from 'interfaces';

export interface HashtagInterface {
  id?: string;
  tag: string;
  video_id: string;
  created_at?: any;
  updated_at?: any;

  video?: VideoInterface;
  _count?: {};
}

export interface HashtagGetQueryInterface extends GetQueryInterface {
  id?: string;
  tag?: string;
  video_id?: string;
}
