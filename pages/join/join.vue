<template>
	<view class="profix-page-container join-page">
		<customHeader style="z-index: 0" :headerText="$t('app.name')" />
		<customHeader :headerText="$t('app.name')" style="position: fixed; top: 0; width: 100%; z-index: 1" />
		<view class="join-scroll page-scroll has-tabbar">
			<view class="banner">
				<view class="banner-tit">{{ $t("join.bannerTit") }}</view>
				<view class="banner-tit">{{ $t("join.bannerTit1") }}</view>
				<view class="banner-img pic">
					<image src="../../static/img/banner/renwu.png" mode="widthFix" class="img"></image>
				</view>
			</view>

			<view class="join-info">
				<view class="join-tit">{{ $t("join.joinTit1") }}</view>
				<view class="info-box">
					<view class="icon-text">
						<view class="icon pic">
							<image src="../../static/img/icon/code.png" mode="widthFix" class="img"></image>
						</view>
						<view class="text">{{invitationObj.invitation_code}} ({{ $t("loacal.chinaText") }})</view>
					</view>
					<view class="copy-btn" @click="copy(invitationObj.invitation_code)">{{ $t("join.copy") }}</view>
				</view>
			</view>

			<view class="join-info">
				<view class="join-tit">{{ $t("join.joinTit2") }}</view>
				<view class="info-box">
					<view class="icon-text">
						<view class="icon pic">
							<image src="../../static/img/icon/code.png" mode="widthFix" class="img"></image>
						</view>
						<view class="text">{{invitationObj.invitation_url}}</view>
					</view>
					<view class="copy-btn" @click="copy(invitationObj.invitation_url)">{{ $t("join.copy") }}</view>
				</view>
			</view>

<!-- 			<view class="census-box">
				<view class="census-tit">
					<view class="icon pic">
						<image src="../../static/img/icon/wallet.png" mode="widthFix" class="img"></image>
					</view>
					<view class="tit">{{ $t("join.boxTit") }}</view>
				</view>
				<view class="chart-con">
					<view class="left">
						<view class="chart-box">
							<view class="color-line" style="background-color: #ffba1f"></view>
							<view class="count">0</view>
							<view class="text">{{ $t("join.bonusText") }}</view>
						</view>
						<view class="chart-box">
							<view class="color-line" style="background-color: #fd7e1f"></view>
							<view class="count">0</view>
							<view class="text">{{ $t("join.commissionText") }}</view>
						</view>
					</view>
					<view class="right">
						<view class="pic">
							<image src="../../static/img/pig.png" mode="widthFix" class="img"></image>
						</view>
						<view class="count">0</view>
						<view class="text">{{ $t("join.compensationText") }}</view>
					</view>
				</view>
			</view> -->

<!-- 			<view class="census-box">
				<view class="census-tit">
					<view class="icon pic">
						<image src="../../static/img/icon/wallet.png" mode="widthFix" class="img"></image>
					</view>
					<view class="tit">{{ $t("join.boxTit") }}</view>
				</view>
				<view class="chart-con">
					<view class="left">
						<view class="chart-box">
							<view class="color-line" style="background-color: #6e1fff"></view>
							<view class="count">0</view>
							<view class="text">{{ $t("join.bonusText") }}</view>
						</view>
						<view class="chart-box">
							<view class="color-line" style="background-color: #1f5efd"></view>
							<view class="count">0</view>
							<view class="text">{{ $t("join.commissionText") }}</view>
						</view>
					</view>
					<view class="right">
						<view class="pic">
							<image src="../../static/img/person.png" mode="widthFix" class="img"></image>
						</view>
						<view class="count">0</view>
						<view class="text">{{ $t("join.compensationText") }}</view>
					</view>
				</view>
			</view> -->

			<view class="team-info">
				<view class="info-box">
					<view class="info-tit" @click="goTeamInfo(1)">
						<view class="line"></view>
						<view class="tit">{{ $t("join.teamTit1") }}</view>
						<view class="arrow-icon"></view>
					</view>
					<view class="box-num">
						<view class="count-info san">
							<view class="count">{{invitationObj.first.total_count}}</view>
							<view class="text">{{ $t("join.partners") }}</view>
						</view>
						<view class="count-info yi">
							<view class="count">{{invitationObj.first.total_commission}}</view>
							<view class="text">{{ $t("join.committee") }}</view>
						</view>
					</view>
				</view>
				<view class="info-box">
					<view class="info-tit" @click="goTeamInfo(2)">
						<view class="line"></view>
						<view class="tit">{{ $t("join.teamTit2") }}</view>
						<view class="arrow-icon"></view>
					</view>
					<view class="box-num">
						<view class="count-info san">
							<view class="count">{{invitationObj.two.total_count}}</view>
							<view class="text">{{ $t("join.partners") }}</view>
						</view>
						<view class="count-info yi">
							<view class="count">{{invitationObj.two.total_commission}}</view>
							<view class="text">{{ $t("join.committee") }}</view>
						</view>
					</view>
				</view>
				<view class="info-box">
					<view class="info-tit" @click="goTeamInfo(3)">
						<view class="line"></view>
						<view class="tit">{{ $t("join.teamTit3") }}</view>
						<view class="arrow-icon"></view>
					</view>
					<view class="box-num">
						<view class="count-info san">
							<view class="count">{{invitationObj.three.total_count}}</view>
							<view class="text">{{ $t("join.partners") }}</view>
						</view>
						<view class="count-info yi">
							<view class="count">{{invitationObj.three.total_commission}}</view>
							<view class="text">{{ $t("join.committee") }}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import customHeader from "@/components/customHeader/customHeader.vue";
import {$request} from '@/utils/request.js'
export default {
	components: {
		customHeader,
	},
	data() {
		return {
			invitationObj:{
				first:{total_count:0,total_commission:0},
				two:{total_count:0,total_commission:0},
				three:{total_count:0,total_commission:0}
			}
		};
	},
	mounted(){
		this.invitation();
	},
	methods: {
		copy(text){
			uni.setClipboardData({
				data:text,
				success: (res) => {
					uni.showToast({
						icon:'none',
						title:'success'
					})
				}
			})
		},
		async invitation(){
			let res = await $request('invitation',{});
			console.log(res)
			if(res.data.code===0){
				this.invitationObj = res.data.data;
				return
			}
			uni.showToast({
				icon:'none',
				title:res.data.msg
			})
		},
		goTeamInfo(index) {
			uni.navigateTo({
				url: `/pages/join/teamInfo?id=${index}`,
			});
		},
	},
};
</script>

<style lang="less">
@import "../../static/less/variable.less";

.join-page {
	.join-scroll {
		background-color: #0C96B7;
		
		display: flex;
		flex-direction: column;

		.banner {
			padding-top: 54rpx;

			.banner-tit {
				color: #fff;
				font-size: 36rpx;
				margin-bottom: 10rpx;
				text-align: center;
			}

			.banner-img {
				margin: -20rpx auto 12rpx;
				width: 52vw;
			}
		}

		.join-info {
			margin-top: 46rpx;
			margin-bottom: 20rpx;
			.join-tit {
				color: #fff;
				margin-bottom: 26rpx;
				font-size: @bodySize;
			}

			.info-box {
				border-radius: 10rpx;
				padding: 32rpx 22rpx;
				// background-color: #ffe5d5;
				background-color: #D5FEFF;
				.df(center, space-between);
				font-size: 28rpx;

				.icon-text {
					.df(center, flex-start);
					width: calc(100% - 190rpx);

					.icon {
						width: 45rpx;
					}

					.text {
						margin-left: 30rpx;
						width: calc(100% - 75rpx);
						.vertical(1);
					}
				}

				.copy-btn {
					border-radius: 10rpx;
					padding: 14rpx 50rpx;
					color: #fff;
					// background: linear-gradient(0deg, #fd7e1f 0%, #fd631f 100%);
					background: linear-gradient(0deg, #0694B8 0%, #6BBDB4 100%);
				}
			}
		}

		.census-box {
			margin-top: 40rpx;
			margin-bottom: 20rpx;
			border-radius: 10rpx;
			padding: 30rpx 25rpx;
			background-color: #fff;

			.census-tit {
				margin-bottom: 40rpx;
				.df(center, flex-start);

				.icon {
					margin-right: 16rpx;
					width: 48rpx;
				}

				.tit {
					font-size: 28rpx;
					color: #383838;
					font-weight: bold;
				}
			}

			.chart-con {
				display: flex;
				flex-direction: row;
				align-items: stretch;
				justify-content: flex-start;

				.left {
					margin-right: 22rpx;
					width: calc(50% - 11rpx);

					.chart-box {
						margin-bottom: 40rpx;
						border-radius: 10rpx;
						padding: 20rpx 20rpx 20rpx 50rpx;
						background-color: #f4f6f8;
						position: relative;
						overflow: hidden;
						color: #383838;

						.color-line {
							position: absolute;
							left: 0;
							top: 0;
							bottom: 0;
							width: 20rpx;
						}

						.count {
							margin-bottom: 24rpx;
							font-size: 36rpx;
						}

						.text {
							font-size: 24rpx;
						}

						&:last-child {
							margin-bottom: 0;
						}
					}
				}

				.right {
					border-radius: 10rpx;
					padding: 25rpx;
					width: calc(50% - 11rpx);
					background-color: #f4f6f8;
					.df(center, center);
					flex-direction: column;
					color: #383838;

					.pic {
						width: 134rpx;
					}

					.count {
						margin-top: 25rpx;
						margin-bottom: 24rpx;
						font-size: 36rpx;
					}

					.text {
						font-size: 24rpx;
					}
				}
			}
		}

		.team-info {
			margin-bottom: 20rpx;
			border-radius: 10rpx;
			padding: 36rpx 20rpx;
			background-color: #fff;

			.info-box {
				margin-bottom: 40rpx;

				&:last-child {
					margin-bottom: 0;
				}

				.info-tit {
					margin-bottom: 40rpx;
					padding-left: 34rpx;
					position: relative;

					.df(center, space-between);

					.line {
						border-radius: 4rpx;
						background-color: #fd661f;
						width: 8rpx;

						position: absolute;
						top: 0;
						bottom: 0;
						left: 4rpx;
					}

					.tit {
						color: #383838;
						font-size: 28rpx;
						font-weight: bold;
					}

					.arrow-icon {
						width: 14rpx;
						height: 25rpx;
						background: url("../../static/img/right_arrow.png") no-repeat top left / 100% 100%;
					}
				}

				.box-num {
					border-radius: 10rpx;
					padding: 40rpx;
					background-color: #f4f6f8;
					.df(stretch, flex-start);

					.count-info {
						&.san {
							width: 75%;
						}

						&.yi {
							width: 25%;
						}

						.count {
							margin-bottom: 22rpx;
							color: #383838;
							font-size: 36rpx;
						}

						.text {
							color: #383838;
							font-size: 24rpx;
						}
					}
				}
			}
		}
	}
}
</style>
