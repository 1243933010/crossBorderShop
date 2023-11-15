<template>
	<view class="profix-page-container storage-level-page">
		<hx-navbar :config="config" />
		<view class="storage-level-scroll page-scroll">
			<view class="storage-list">
				<view class="storage-item LV0">
					<view class="pic bg">
						<image :src="lvImgList.LV0" mode="widthFix" class="img"></image>
					</view>
					<view class="level-info">
						<view class="info-row">
							<view class="row-item">
								<text>0{{ $t("storageLevel.dollar") }}</text>
								<text>{{ $t("storageLevel.row1") }}</text>
							</view>
							<view class="row-item">
								<text>0</text>
								<text>{{ $t("storageLevel.row2") }}</text>
							</view>
							<view class="row-item">
								<text>0{{ $t("storageLevel.dollar") }}</text>
								<text>{{ $t("storageLevel.row3") }}</text>
							</view>
						</view>
						<view class="level-income">
							<view class="level">LV0</view>
							<view class="income">
								<text>5.00{{ $t("storageLevel.dollar") }}</text>
								<text>{{ $t("storageLevel.dailyRevenue") }}</text>
							</view>
						</view>
					</view>
				</view>

				<view class="storage-item LV">
					<view class="pic bg">
						<image :src="lvImgList.LV" mode="widthFix" class="img"></image>
					</view>
					<view class="level-info">
						<view class="info-row">
							<view class="row-item">
								<text>0{{ $t("storageLevel.dollar") }}</text>
								<text>{{ $t("storageLevel.row1") }}</text>
							</view>
							<view class="row-item">
								<text>0</text>
								<text>{{ $t("storageLevel.row2") }}</text>
							</view>
							<view class="row-item">
								<text>0{{ $t("storageLevel.dollar") }}</text>
								<text>{{ $t("storageLevel.row3") }}</text>
							</view>
						</view>
						<view class="level-income">
							<view class="level">LV0</view>
							<view class="income">
								<text>5.00{{ $t("storageLevel.dollar") }}</text>
								<text>{{ $t("storageLevel.dailyRevenue") }}</text>
							</view>
						</view>
					</view>
				</view>

				<view class="storage-item LV1">
					<view class="pic bg">
						<image :src="lvImgList.LV1" mode="widthFix" class="img"></image>
					</view>
					<view class="level-info">
						<view class="info-row">
							<view class="row-item">
								<text>0{{ $t("storageLevel.dollar") }}</text>
								<text>{{ $t("storageLevel.row1") }}</text>
							</view>
							<view class="row-item">
								<text>0</text>
								<text>{{ $t("storageLevel.row2") }}</text>
							</view>
							<view class="row-item">
								<text>0{{ $t("storageLevel.dollar") }}</text>
								<text>{{ $t("storageLevel.row3") }}</text>
							</view>
						</view>
						<view class="level-income">
							<view class="level">LV0</view>
							<view class="income">
								<text>5.00{{ $t("storageLevel.dollar") }}</text>
								<text>{{ $t("storageLevel.dailyRevenue") }}</text>
							</view>
						</view>
					</view>
				</view>

				<view class="storage-item LV2">
					<view class="pic bg">
						<image :src="lvImgList.LV2" mode="widthFix" class="img"></image>
					</view>
					<view class="level-info">
						<view class="info-row">
							<view class="row-item">
								<text>0{{ $t("storageLevel.dollar") }}</text>
								<text>{{ $t("storageLevel.row1") }}</text>
							</view>
							<view class="row-item">
								<text>0</text>
								<text>{{ $t("storageLevel.row2") }}</text>
							</view>
							<view class="row-item">
								<text>0{{ $t("storageLevel.dollar") }}</text>
								<text>{{ $t("storageLevel.row3") }}</text>
							</view>
						</view>
						<view class="level-income">
							<view class="level">LV0</view>
							<view class="income">
								<text>5.00{{ $t("storageLevel.dollar") }}</text>
								<text>{{ $t("storageLevel.dailyRevenue") }}</text>
							</view>
						</view>
					</view>
				</view>

				<view class="storage-item LV3">
					<view class="pic bg">
						<image :src="lvImgList.LV3" mode="widthFix" class="img"></image>
					</view>
					<view class="level-info">
						<view class="info-row">
							<view class="row-item">
								<text>0{{ $t("storageLevel.dollar") }}</text>
								<text>{{ $t("storageLevel.row1") }}</text>
							</view>
							<view class="row-item">
								<text>0</text>
								<text>{{ $t("storageLevel.row2") }}</text>
							</view>
							<view class="row-item">
								<text>0{{ $t("storageLevel.dollar") }}</text>
								<text>{{ $t("storageLevel.row3") }}</text>
							</view>
						</view>
						<view class="level-income">
							<view class="level">LV0</view>
							<view class="income">
								<text>5.00{{ $t("storageLevel.dollar") }}</text>
								<text>{{ $t("storageLevel.dailyRevenue") }}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import hxNavbar from "@/components/hx-navbar.nvue";

export default {
	components: {
		hxNavbar,
	},
	data() {
		return {
			lvImgList: {
				LV0: "../../static/img/storageLevel/LV0.png",
				LV: "../../static/img/storageLevel/LV.png",
				LV1: "../../static/img/storageLevel/LV1.png",
				LV2: "../../static/img/storageLevel/LV2.png",
				LV3: "../../static/img/storageLevel/LV3.png",
			},
		};
	},
	computed: {
		config() {
			return {
				title: this.$t("storageLevel.pageTit"),
				color: "#ffffff",
				// backgroundColor: [1, "#24bdab"],
				// 背景图片（array则为滑动切换背景图，string为单一背景图）
				// backgroundImg: ['/static/xj.jpg','/static/logo.png'],
				backgroundImg: "../../static/img/header_tabber.png",
			};
		},
	},
};
</script>

<style lang="less" scoped>
@import "../../static/less/variable.less";
page {
	background-color: #f5f4f9;
}

.storage-level-page {
	.storage-level-scroll {
		padding-top: 28rpx;

		.storage-list {
			margin-right: -10rpx;
			margin-left: -10rpx;

			.storage-item {
				margin-bottom: 20rpx;
				border-radius: 20rpx;
				border: 1px solid #fd7e1f;
				padding: 10rpx;
				background-color: #fff;
				position: relative;

				&.LV1 {
					.level-info {
						color: #3f7fe1;
					}
				}

				&.LV2 {
					.level-info {
						color: #746fd8;
					}
				}

				&.LV3 {
					.level-info {
						color: #d4fdff;
					}
				}

				.bg {
					width: 100%;
				}

				.level-info {
					position: absolute;
					left: 0;
					right: 0;
					bottom: 0;
					top: 0;

					padding: 35rpx 40rpx;
					color: #a77933;

					display: flex;
					flex-direction: column-reverse;

					.level-income {
						font-weight: bold;

						.level {
							margin-bottom: 26rpx;
							font-size: 72rpx;
							line-height: 1;
						}

						.income {
							.df(center, flex-start);

							text {
								margin-left: 45rpx;
								font-size: 30rpx;
								line-height: 1;

								&:first-child {
									margin-left: 0;
								}
							}
						}
					}

					.info-row {
						margin-top: 58rpx;
						.df(center, space-between);

						.row-item {
							text-align: center;
							font-size: 24rpx;

							text {
								margin-bottom: 14rpx;

								&:last-child {
									margin-bottom: 0;
								}
							}
						}
					}
				}
			}
		}
	}
}
</style>
