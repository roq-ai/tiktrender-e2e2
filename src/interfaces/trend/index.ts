import { VideoTrendInterface } from 'interfaces/video-trend';
import { GetQueryInterface } from 'interfaces';

export interface TrendInterface {
  id?: string;
  name: string;
  description?: string;
  created_at?: any;
  updated_at?: any;
  video_trend?: VideoTrendInterface[];

  _count?: {
    video_trend?: number;
  };
}

export interface TrendGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
}
