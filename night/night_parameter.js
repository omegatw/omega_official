/**
 * Omega 主視覺動畫 - 圖層參數設定檔
 *
 * 每個圖層包含下列關鍵屬性：
 * - filename: 圖片檔名
 * - width / height: 原始圖檔尺寸 (px)
 * - start_alpha / mid_alpha / end_alpha: 動畫 0% (start)、50% (mid)、100% (end) 的不透明度 (0 ~ 1)
 * - start_shift_y_percent / mid_shift_y_percent / end_shift_y_percent: 垂直方向位移百分比 (相對於視域高度)
 */

var milkway = {
  filename: "0milkway.png",
  width: 1920,
  height: 3414,
  horizontal_align: "center",
  start_alpha: 1,
  mid_alpha: 1,
  end_alpha: 1,
  start_shift_y_percent: -2,
  mid_shift_y_percent: 0,
  end_shift_y_percent: 0
};

var blue = {
  filename: "1blue.png",
  width: 1920,
  height: 1080,
  horizontal_align: "center",
  start_alpha: 0.36,
  mid_alpha: 1,
  end_alpha: 1,
  start_shift_y_percent: 0,
  mid_shift_y_percent: 0,
  end_shift_y_percent: 0
};

var moving_red = {
  filename: "2moving_red.png",
  width: 1920,
  height: 1080,
  horizontal_align: "center",
  start_alpha: 1,
  mid_alpha: 1,
  end_alpha: 1,
  start_shift_y_percent: 0.1676,
  mid_shift_y_percent: 0,
  end_shift_y_percent: 0
};

var light_clouds = {
  filename: "3light_clouds.png",
  width: 1920,
  height: 1080,
  horizontal_align: "center",
  start_alpha: 0,
  mid_alpha: 1,
  end_alpha: 1,
  start_shift_y_percent: 0,
  mid_shift_y_percent: 0,
  end_shift_y_percent: 0
};

var sun = {
  filename: "4sun.png",
  width: 1920,
  height: 1080,
  horizontal_align: "center",
  start_alpha: 0,
  mid_alpha: 1,
  end_alpha: 1,
  start_shift_y_percent: 0.06575,
  mid_shift_y_percent: 0,
  end_shift_y_percent: 0
};

var black_mountain = {
  filename: "5black_mountain.png",
  width: 1920,
  height: 1080,
  horizontal_align: "center",
  start_alpha: 1,
  mid_alpha: 1,
  end_alpha: 1,
  start_shift_y_percent: 0,
  mid_shift_y_percent: 0,
  end_shift_y_percent: 0
};

var red_mountain = {
  filename: "6red_mountain.png",
  width: 1920,
  height: 1080,
  horizontal_align: "center",
  start_alpha: 0,
  mid_alpha: 1,
  end_alpha: 1,
  start_shift_y_percent: 0,
  mid_shift_y_percent: 0,
  end_shift_y_percent: 0
};

var omega = {
  filename: "7omega.png",
  width: 1200,
  height: 1080,
  horizontal_align: "center",
  start_alpha: 0,
  mid_alpha: 0,
  end_alpha: 1,
  start_shift_y_percent: 0,
  mid_shift_y_percent: 0,
  end_shift_y_percent: 0
};
