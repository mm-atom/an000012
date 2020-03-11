import moment from 'moment';

/**
 * 获取某天的结束时间
 * @param time 时间戳
 */
export default function end_day(time: string, mask: string): number;
export default function end_day(time: number): number;
export default function end_day(time: number | string, mask?: string) {
	return moment(time, mask).endOf('day').valueOf();
}
