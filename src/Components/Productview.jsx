import React from 'react';
import { Link } from 'react-router-dom';


function Productview() {
  return (
   <>
   <section className="middle-content">
		<div className="cs-breadcrumb">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<ul>
							<li><a href="index.html">Home</a></li>
							<li><a href="category.html">Product</a></li>
							<li>Product Name</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div className="product-view  main-productview">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="proview-top productview-top">
							<div className="proview-flex">
								<div className="proview-left">
									<button type="button" className="goToPrevSlideBtn common-lightcontorl" id="goToPrevSlide"></button>
									<button type="button" className="goToNextSlideBtn common-lightcontorl" id="goToNextSlide"></button>
									<ul id="lightSlider">
								        <li data-thumb="assets/images/pro-1.png">
									         <a href="assets/images/pro-1.png" data-fancybox="gallery">
									             <img src="assets/images/pro-1.png" />
									         </a>
								        </li>
							        	<li data-thumb="assets/images/pro-1.png">
									         <a href="assets/images/pro-1.png" data-fancybox="gallery">
									             <img src="assets/images/pro-1.png" />
									         </a>
								        </li>
								        <li data-thumb="assets/images/pro-1.png">
									         <a href="assets/images/pro-1.png" data-fancybox="gallery">
									             <img src="assets/images/pro-1.png" />
									         </a>
								        </li>
								        <li data-thumb="assets/images/pro-1.png">
									         <a href="assets/images/pro-1.png" data-fancybox="gallery">
									             <img src="assets/images/pro-1.png" />
									         </a>
								        </li>
								        <li data-thumb="assets/images/pro-1.png">
									         <a href="assets/images/pro-1.png" data-fancybox="gallery">
									             <img src="assets/images/pro-1.png" />
									         </a>
								        </li>
							    	</ul>
								</div>
								<div className="proview-right">
									<div className="product-data">
										<div className="main-pro-fav">
											<button type="button" className="btn add-favBtn" id="add_favBtn">
												 <i className="fa fa-star-o" aria-hidden="true"></i>
											</button>
										</div>
										<h4><a href="javascript:void(0)" tabindex="0">Structure material</a></h4>
										<div className="pro-description mp-desc comm-desk-sec">
											<p>
												Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
												dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
												suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
												vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
												iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
												Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
												laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
												ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
												Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
												dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
												suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
												vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
												iusto odio dignissim qui blandit praesent luptatum zzril delenit a
											</p>
										</div>
										<div className="product-varient">
											<div className="product-varient-inner">
												<label>Suppler:</label>
												<div className="pvi-flex">
													<p>Hempel</p>
												</div>
											</div>
											<div className="product-varient-inner pvi-weight">
												<label>Weight:</label>
												<div className="pvi-flex">
													<span>1x50 ML</span>
													<span>1x50 ML</span>
													<span>1x50 ML</span>
												</div>
											</div>
											<div className="product-varient-inner">
												<label>Unit Type:</label>
												<div className="pvi-flex">
													<p>Piece</p>
												</div>
											</div>
										</div>
										<div className="product-pricedata">
											<div className="ppd-flex">
												<div className="pro-quantity">
													<div className="quantity">
														<button type="button" className="quantity-minus">-</button>	
															<input type="number" id="quantity_count" className="input-text qty" step="1" min="0" max="99" name="qty-count" value="1" title="" size="4" placeholder="" inputmode="numeric"/>
														<button type="button" className="quantity-plus">+</button>	
													</div>
												</div>
												<div className="price-amount">
													<div className="price-amountinner">
														<span className="price-discount"><del>12.00</del> KD</span>
														<span>12.00 KD</span>
													</div>
												</div>
											</div>
										</div>
                                        <Link to = "/cart">
										<div className="pro-addcartbtn">
											<button type="button" className="btn pro-addcart-btn" id="pro_addcart_btn">Add to cart</button>
										</div>
                                        </Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container comm-mob-sec">
				<div className="row">
					<div className="col-12">
						<div className="product-separator proview-separator"></div>
					</div>
				</div>
			</div>
			<div className="container comm-mob-sec">
				<div className="row">
					<div className="col-12">
						<div className="proview-bottom">
							<div className="pro-description">
								<p>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
									dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
									suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
									vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
									iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
									Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
									laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
									ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
									dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
									suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
									vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
									iusto odio dignissim qui blandit praesent luptatum zzril delenit a
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="product-separator"></div>
				</div>
			</div>
		</div>
		<div className="best-seller product-slider proview-mobile-carousel">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="product-main-title common-main-title">
							<h2>Related products</h2>
							<a href="#" className="view-moreLink">View all</a>
						</div>
					</div>
				</div>
				<div className="swiper product-sliding main-related-product product-common-swiper">
					<div className="row common-slick-slide swiper-wrapper">
						<div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem">
							<div className="product-box">
								<div className="product-img text-center">
									<img src="assets/images/pro-1.png" alt="product image"/>
								</div>
								<div className="product-data">
									<h4><a href="javascript:void(0)">Structure material</a></h4>
									<div className="product-varient">
										<div className="product-varient-inner">
											<label>Suppler:</label>
											<div className="pvi-flex">
												<p>Hempel</p>
											</div>
										</div>
										<div className="product-varient-inner pvi-weight">
											<label>Weight:</label>
											<div className="pvi-flex">
												<span>1x50 ML</span>
												<span>1x50 ML</span>
												<span>1x50 ML</span>
											</div>
										</div>
										<div className="product-varient-inner">
											<label>Unit Type:</label>
											<div className="pvi-flex">
												<p>Piece</p>
											</div>
										</div>
									</div>
									<div className="product-pricedata">
										<div className="ppd-flex">
											<button type="button" className="btn add-cartBtn" id="add_cartBtn">
												<img src="assets/images/add-cart.png" alt="add cart icon"/>
											</button>
											<button type="button" className="btn add-favBtn" id="add_favBtn">
												 <i className="fa fa-star-o" aria-hidden="true"></i>
											</button>
											<div className="price-amount">
												<div className="price-amountinner">
													<span className="price-discount"><del>12.00</del> KD</span>
													<span>12.00 KD</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem">
							<div className="product-box">
								<div className="product-img text-center">
									<img src="assets/images/pro-2.png" alt="product image"/>
								</div>
								<div className="product-data">
									<h4><a href="javascript:void(0)">Structure material</a></h4>
									<div className="product-varient">
										<div className="product-varient-inner">
											<label>Suppler:</label>
											<div className="pvi-flex">
												<p>Hempel</p>
											</div>
										</div>
										<div className="product-varient-inner pvi-weight">
											<label>Weight:</label>
											<div className="pvi-flex">
												<span>1x50 ML</span>
												<span>1x50 ML</span>
												<span>1x50 ML</span>
											</div>
										</div>
										<div className="product-varient-inner">
											<label>Unit Type:</label>
											<div className="pvi-flex">
												<p>Piece</p>
											</div>
										</div>
									</div>
									<div className="product-pricedata">
										<div className="ppd-flex">
											<button type="button" className="btn add-cartBtn" id="add_cartBtn">
												<img src="assets/images/add-cart.png" alt="add cart icon"/>
											</button>
											<button type="button" className="btn add-favBtn" id="add_favBtn">
												 <i className="fa fa-star-o" aria-hidden="true"></i>
											</button>
											<div className="price-amount">
												<div className="price-amountinner">
													<span className="price-discount"><del>12.00</del> KD</span>
													<span>12.00 KD</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem">
							<div className="product-box">
								<div className="product-img text-center">
									<img src="assets/images/pro-3.png" alt="product image"/>
								</div>
								<div className="product-data">
									<h4><a href="javascript:void(0)">Structure material</a></h4>
									<div className="product-varient">
										<div className="product-varient-inner">
											<label>Suppler:</label>
											<div className="pvi-flex">
												<p>Hempel</p>
											</div>
										</div>
										<div className="product-varient-inner pvi-weight">
											<label>Weight:</label>
											<div className="pvi-flex">
												<span>1x50 ML</span>
												<span>1x50 ML</span>
												<span>1x50 ML</span>
											</div>
										</div>
										<div className="product-varient-inner">
											<label>Unit Type:</label>
											<div className="pvi-flex">
												<p>Piece</p>
											</div>
										</div>
									</div>
									<div className="product-pricedata">
										<div className="ppd-flex">
											<button type="button" className="btn add-cartBtn" id="add_cartBtn">
												<img src="assets/images/add-cart.png" alt="add cart icon"/>
											</button>
											<button type="button" className="btn add-favBtn" id="add_favBtn">
												 <i className="fa fa-star-o" aria-hidden="true"></i>
											</button>
											<div className="price-amount">
												<div className="price-amountinner">
													<span className="price-discount"><del>12.00</del> KD</span>
													<span>12.00 KD</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem">
							<div className="product-box">
								<div className="product-img text-center">
									<img src="assets/images/pro-4.png" alt="product image"/>
								</div>
								<div className="product-data">
									<h4><a href="javascript:void(0)">Structure material</a></h4>
									<div className="product-varient">
										<div className="product-varient-inner">
											<label>Suppler:</label>
											<div className="pvi-flex">
												<p>Hempel</p>
											</div>
										</div>
										<div className="product-varient-inner pvi-weight">
											<label>Weight:</label>
											<div className="pvi-flex">
												<span>1x50 ML</span>
												<span>1x50 ML</span>
												<span>1x50 ML</span>
											</div>
										</div>
										<div className="product-varient-inner">
											<label>Unit Type:</label>
											<div className="pvi-flex">
												<p>Piece</p>
											</div>
										</div>
									</div>
									<div className="product-pricedata">
										<div className="ppd-flex">
											<button type="button" className="btn add-cartBtn" id="add_cartBtn">
												<img src="assets/images/add-cart.png" alt="add cart icon"/>
											</button>
											<button type="button" className="btn add-favBtn" id="add_favBtn">
												 <i className="fa fa-star-o" aria-hidden="true"></i>
											</button>
											<div className="price-amount">
												<div className="price-amountinner">
													<span className="price-discount"><del>12.00</del> KD</span>
													<span>12.00 KD</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 col-12 swiper-slide product-boxcol product-boxitem">
							<div className="product-box">
								<div className="product-img text-center">
									<img src="assets/images/pro-4.png" alt="product image"/>
								</div>
								<div className="product-data">
									<h4><a href="javascript:void(0)">Structure material</a></h4>
									<div className="product-varient">
										<div className="product-varient-inner">
											<label>Suppler:</label>
											<div className="pvi-flex">
												<p>Hempel</p>
											</div>
										</div>
										<div className="product-varient-inner pvi-weight">
											<label>Weight:</label>
											<div className="pvi-flex">
												<span>1x50 ML</span>
												<span>1x50 ML</span>
												<span>1x50 ML</span>
											</div>
										</div>
										<div className="product-varient-inner">
											<label>Unit Type:</label>
											<div className="pvi-flex">
												<p>Piece</p>
											</div>
										</div>
									</div>
									<div className="product-pricedata">
										<div className="ppd-flex">
											<button type="button" className="btn add-cartBtn" id="add_cartBtn">
												<img src="assets/images/add-cart.png" alt="add cart icon"/>
											</button>
											<button type="button" className="btn add-favBtn" id="add_favBtn">
												 <i className="fa fa-star-o" aria-hidden="true"></i>
											</button>
											<div className="price-amount">
												<div className="price-amountinner">
													<span className="price-discount"><del>12.00</del> KD</span>
													<span>12.00 KD</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="swiper-button-prev common-swipercontrol-btn"></div>
		   		    <div className="swiper-button-next common-swipercontrol-btn"></div>
				</div>
			</div>
		</div>
	</section>
   </>
  )
}

export default Productview
