import { VideoInterface } from 'interfaces/video';
import { TrendInterface } from 'interfaces/trend';
import { GetQueryInterface } from 'interfaces';

export interface VideoTrendInterface {
  id?: string;
  video_id: string;
  trend_id: string;
  created_at?: any;
  updated_at?: any;

  video?: VideoInterface;
  trend?: TrendInterface;
  _count?: {};
}

export interface VideoTrendGetQueryInterface extends GetQueryInterface {
  id?: string;
  video_id?: string;
  trend_id?: string;
}
