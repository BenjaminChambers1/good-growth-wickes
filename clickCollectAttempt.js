const productList = document.getElementsByClassName("card product-card ");

for (product of productList) {
	const priceSection = product.getElementsByClassName("product-card__price")[0];

	if (!priceSection) continue;

	// Below was all copy and pasted for the first attempt so you done need to read any of the clickCollectHTML variable
	let clickCollectHTML = `
			<div class="btn btn-action btn_full bw__stock stock">
				<div class="stock__accordion non-reg collapsed" data-toggle="collapse" data-target=".stock-accordion" aria-expanded="false" style="text-wrap: pretty;">
					<div class="stock__head non-reg">
						<span class="non-reg__text">
							FREE Click &amp; Collect within 30 minutes
						</span>
					</div>
				</div>
				<div class="stock-accordion stock__info collapse " id="stock-accordion0">
					<div class="stock__tabs ">
						<div class="stock__tab active" data-stores="nearest">
							Nearest Store
						</div>
						<div class="stock__tab" data-stores="more">
							More Stores
						</div>
					</div>
					<div class="stock__content">
						<div class="stock__find">
							<div class="stock__params">
								<div class="stock__quant">
									<label
										for="quantity-field"
										class="quantity-label"
									>
										Quantity:<input type="text" inputmode="numeric" required="" pattern="[1-9]\d*" maxlength="5" size="4" id="stock-quantity0" class="tbx tbx_quantity" value="1">
									</label>
								</div>
								<span class="stock__price">
									<span class="stock__price-val">£12</span>
								</span>
							</div>
						<form id="storePickupForm0" action="/store-pickup/266835/pointOfServices" class="stock__postcode" method="post" onkeypress="return event.keyCode != 13;">
							<div class="stock__postcode">
									<label class="stock__postcode_label">
										<input type="text" class="stock__input tbx" name="bw-postcode" id="bw-postcode0" value="">
										<button class="btn btn-secondary stock__target" id="geoLocationIcon0">
											<span class="btn__text">
											<svg class="svg-inline--fa fa-crosshairs fa-w-16" aria-hidden="true" focusable="false" data-prefix="far" data-icon="crosshairs" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M500 232h-29.334C459.597 131.885 380.115 52.403 280 41.334V12c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v29.334C131.885 52.403 52.403 131.885 41.334 232H12c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h29.334C52.403 380.115 131.885 459.597 232 470.666V500c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12v-29.334C380.115 459.597 459.597 380.115 470.666 280H500c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12zM280 422.301V380c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v42.301C158.427 411.84 100.154 353.532 89.699 280H132c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12H89.699C100.16 158.427 158.468 100.154 232 89.699V132c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12V89.699C353.573 100.16 411.846 158.468 422.301 232H380c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h42.301C411.84 353.573 353.532 411.846 280 422.301zM288 256c0 17.673-14.327 32-32 32s-32-14.327-32-32c0-17.673 14.327-32 32-32s32 14.327 32 32z"></path></svg><!-- <i class="far fa-crosshairs"></i> Font Awesome fontawesome.com -->
											</span>
										</button>
									</label>
									<span class="stock__postcode_invalid-msg">
										Check that you entered a valid postcode or place name.
									</span>
							</div>
							<div class="stock__quest">
								<label for="stock-only0" class="chb">
									<input type="checkbox" value="" id="stock-only0" name="stock-only" class="stock__quest_check">
									<ins><svg class="svg-inline--fa fa-check fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg><!-- <i class="fas fa-check"></i> Font Awesome fontawesome.com --></ins>
									<span>Only show stores with stock.</span>
								</label>
								<label for="cc-only0" class="chb">
									<input type="checkbox" value="" id="cc-only0" name="cc-only" class="stock__quest_check">
										<ins><svg class="svg-inline--fa fa-check fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg><!-- <i class="fas fa-check"></i> Font Awesome fontawesome.com --></ins>
									<span>Only show stores with Click &amp; Collect.</span>
								</label>
								<span class="icon icon-info-component " data-toggle="tooltip" data-placement="left" title="" data-original-title="We offer a queueing system for click &amp; collect when stores are busy.">
									<svg class="svg-inline--fa fa-info-circle fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg><!-- <span class="fas fa-info-circle"></span> Font Awesome fontawesome.com -->
									<svg class="svg-inline--fa fa-info-circle fa-w-16" aria-hidden="true" focusable="false" data-prefix="far" data-icon="info-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm0-338c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg><!-- <span class="far fa-info-circle"></span> Font Awesome fontawesome.com -->
								</span>
							</div>
							<button class="btn btn-primary btn_full stock__find_btn" id="bw_pickupstore_search_button0">
								<span class="btn__text">Find Stores</span>
							</button>
							<div class="stock__cancel">
								<a href="#" class="stock__cancel-text">
								Cancel
								</a>
							</div>
							<input type="hidden" name="cartPage" id="atCartPageBW0" value="false">
							<input type="hidden" name="entryNumber" value="0" class="entryNumber">
							<input type="hidden" name="nearestStore" id="nearestStore0" value="true">
							<input type="hidden" name="productPage" id="atProductPageBW0" value="true">
						</form>
						</div>
			
						<div class="stock__result stock__result_hide">
							<div class="stock__search">
								<div class="stock__res">
									<div class="stock__arg">
										<div class="stock__amount">
											<span class="stock__amount-title">Quantity:</span>
											<span class="stock__amount-val">1</span>
										</div>
										<div class="stock__cost">
											£<span class="stock__cost-val">12</span>
										</div>	
									</div>
									<div class="stock__descr">
										Stores with <span class="stock__descr_both">both</span> <span class="stock__descr_stock">stock</span> <span class="stock__descr_both">and</span> <span class="stock__descr_c-and-c">Click &amp; Collect</span> near&nbsp;<span class="stock__descr_post"></span>.
									</div>
								</div>
								<div class="stock__edit">
									<button class="btn btn-primary stock__edit_btn">
										<span class="btn__text">
											<svg class="svg-inline--fa fa-pencil fa-w-16" aria-hidden="true" focusable="false" data-prefix="far" data-icon="pencil" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M491.609 73.625l-53.861-53.839c-26.378-26.379-69.076-26.383-95.46-.001L24.91 335.089.329 484.085c-2.675 16.215 11.368 30.261 27.587 27.587l148.995-24.582 315.326-317.378c26.33-26.331 26.581-68.879-.628-96.087zM120.644 302l170.259-169.155 88.251 88.251L210 391.355V350h-48v-48h-41.356zM82.132 458.132l-28.263-28.263 12.14-73.587L84.409 338H126v48h48v41.59l-18.282 18.401-73.586 12.141zm378.985-319.533l-.051.051-.051.051-48.03 48.344-88.03-88.03 48.344-48.03.05-.05.05-.05c9.147-9.146 23.978-9.259 33.236-.001l53.854 53.854c9.878 9.877 9.939 24.549.628 33.861z"></path></svg><!-- <i class="far fa-pencil"></i> Font Awesome fontawesome.com -->
											Edit Search</span>
									</button>
								</div>
							</div>
							<div class="stock__list">
							<form class="" id="bwMoreStoresAddToCart0" action="/store-pickup/cart/add" method="post" style="width: auto">
								<button class="btn btn-action btn_full bw__cc-btn" disabled="disabled">
									<span class="btn__text">
										Click &amp; Collect not available
									</span>
								</button>
							</form>
							<div class=" reserve">
								<div class="reserve_ic">
									<svg class="svg-inline--fa fa-hourglass-half fa-w-12" aria-hidden="true" focusable="false" data-prefix="far" data-icon="hourglass-half" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M368 48h4c6.627 0 12-5.373 12-12V12c0-6.627-5.373-12-12-12H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h4c0 80.564 32.188 165.807 97.18 208C47.898 298.381 16 383.9 16 464h-4c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h360c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12h-4c0-80.564-32.188-165.807-97.18-208C336.102 213.619 368 128.1 368 48zm-48 0c0 28.672-4.564 55.81-12.701 80H76.701C68.564 103.81 64 76.672 64 48h256zm-12.701 336H76.701C97.405 322.453 141.253 280 192 280s94.595 42.453 115.299 104z"></path></svg><!-- <i class="far fa-hourglass-half"></i> Font Awesome fontawesome.com -->
								</div>
								<div class="reserve_msg">
									Our stock moves fast! <span class="reserve_bold">Secure your product now with Click &amp; Collect.</span></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	`;
	const ccElement = document.createElement("div");
	ccElement.innerHTML = clickCollectHTML;
	priceSection.appendChild(ccElement);
}
