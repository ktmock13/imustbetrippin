import React from 'react'
import Layout from '../components/layout'
import ImageGallery from 'react-image-gallery'
import Link from 'gatsby-link'

const VanPage = () => (
  <Layout>
    <h1>The Van Build</h1>
    <p>
      This is the story of how I built a camper-van/dirt-bike hauler in about a
      month. I did this solo, so this was a month-long marathon of hyper-focused
      learning, iteration, long nights, and overall fun. I wanted a pretty
      specific set of cargo dimensions and features so I made it my mission to
      DIY. Let's start with what was actually accomplished.
    </p>
    <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/k.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/d.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/g.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/j.jpeg',

        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/a.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/m.jpeg',

        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/b.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/c.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/e.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/f.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/h.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/I.jpeg',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={true}
      thumbnailPosition="left"
    />
    <h2>Overview</h2>
    <ul>
      <li>2015 Ford Transit 250, 148" wheelbase, high-roof</li>
      <li>Sleeps 2</li>
      <li>Running sink w/5gal collection tank</li>
      <li>30gal fresh water tank</li>
      <li>Heated tailgate shower</li>
      <li>Dometic Fridge/Freezer</li>
      <li>360W solar (+20A alternator charging)</li>
      <li>300AH battery storage</li>
      <li>Gasoline powered cabin heater</li>
      <li>Maxxair roof fan</li>
      <li>3M Thinsulate wall insulation (1" rigid floor insulation)</li>
      <li>Swiveling seats (2)</li>
      <li>Front/rear camera system</li>
      <li>Composting toilet</li>
      <li>budget: $35k (~$25k on vehicle, ~$10k on conversion)</li>
    </ul>
    <br />
    <h2>The Build Process</h2>
    <p>
      This whole thing started with TONS of preparation, like, months of it. I
      made all of my decisions on base vehicle, materials, appliances,
      designs/dimensions, electrical requirements, tools required, budgets, and
      more in the 2-3 months preceeding. For simplicity, I won't go into my
      reasoning too much. However, you should know that every square inch of
      this thing was very carefully considered before I spent a single dollar.
    </p>
    <h3>Gutting, Sanding, and Cutting</h3>
    <p>
      I left the dealership with a 2015 Transit in late April. It's the tallest
      interior spaced van on the market and this one only had about 50k miles.
      Perfect for my DIY build.
    </p>
    <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/1.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/2.jpeg',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={true}
      thumbnailPosition="left"
    />
    <p>
      The van was a little banged up in the cargo bay, but nothing a little
      sanding and touch-up paint couldn't fix! This model is the barest of bare
      bones, it has power windows and airbags, and thats about it. In retrospect
      I would opt for cruise control and LSD, but one can't be too picky with
      the used market and a tight budget. The first order of business was
      tearing out all of the denim flooring, plastic cardboard walls, and
      worst-of-all the heavy steel framing and bulkhead. Once everything was
      out, we sanded over any of the worn parts of the interior frame and
      finished it with some primer. For this I mostly used a drill with a wire
      brush attachment, a shop-vac, and some mineral spirits.
    </p>
    <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/3.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/4.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/5.jpeg',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={true}
      thumbnailPosition="left"
    />
    <p>
      Next was a scary step, cutting the fan hole in the ceiling. This was
      practically my first cut *ever* with a jigsaw and it went perfectly fine.
      My advice is don't sweat it too much and go slow.
    </p>
    <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/6.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/7.jpeg',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={true}
      thumbnailPosition="left"
    />
    <p>
      For installing the fan, I used a plastic (looks 3d printed) gasket from
      Ebay on the roof to fill the corrugations. I sealed this gasket with
      various marine-grade sealants then secured the fan itself to the top with
      the pre-drilled holes and provided sheet metal screws. I wanted a little
      more than sheet metal for the screws to bite in to so I used some strips
      of OSB on the inside as an anchor.
    </p>{' '}
    <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/8.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/9.jpeg',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={true}
      thumbnailPosition="left"
    />
    <p>
      For the sealant on the roof I used Henry's "Tropicool" which is readily
      available at Home Depot and is made for exactly this kind of thing. The
      result looks a little messy so in the future I'd use self-leveling "Lapp"
      sealant. Although, I have had zero issues with the Tropicool.
    </p>
    <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/10.jpeg',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={false}
      showThumbnails={false}
    />
    <h3>Flooring, Framing, and Roof</h3>
    <p>
      Next was the floor. I decided to go with 1/2" pink XPS insulation. This
      thickness would *almost* perfectly fill the corrugations on the floor and
      give a pretty good R-value to the floor's insulation. The process of
      cutting and silicone-ing perfectly sized strips for the corrugations was
      brutal, but I would do it all over again for a warm floor on your bare
      feet. I used another layer of 1/2" foam, then a 1/2" of double poly'd
      plywood ontop of the strips. The foam was easy to cut with a break away
      blade and made a great template for the 1/2" plywood sheets.
    </p>
    <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/11.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/12.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/13.jpeg',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={true}
      thumbnailPosition="left"
    />
    <p>
      For the wheel wells I decided to just go with a few layers of reflective
      EZ-cool insulation inside of the OEM plastic moldings. And for the edges
      all around the plywood I used a very conservative amount of
      Gaps-and-cracks expanding foam.
    </p>
    <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/14.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/15.jpeg',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={true}
      thumbnailPosition="left"
    />
    <p>
      Around the same time as the floor I started the electrical work by
      mounting my first 2 solar panels and along with the plastic flange to
      route the wires into the cabin. For the panels, I decided against
      expensive mounting systems and instead just used some aluminum z brackets
      with sheet metal screws straight through the roof. I used silicone sealant
      between the van/bracket, bracket/bolt-head, on top of the bolt-heads, and
      inside the van when the screws came through. Almost a year later writing
      this and I can say this has held up great and cost me next to nothing.
    </p>
    <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/16.jpeg',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={false}
      showThumbnails={false}
    />
    <p>
      Now that the floor was in it was time to build the wooden bed platform. I
      did this by trimming out 2x4 shaped holes for the 4 posts into the floor
      boards. Then we mounted some vertical 2x4s to the ribs of the van with
      (countersunk) long sheet metal screws. These turned out to be really
      sturdy and made a nice surface to mount a rectangular 2x4 frame on-top for
      the 3/4" plywood loft. For the rear-most member of the bed-frame we
      mounted it on top and secured it with through to the plywood with long
      lagbolts . The reason for this is to give the dirt bikes the required
      entry clearance (about 52")
    </p>
    <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/17.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/18.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/19.jpeg',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={true}
      thumbnailPosition="left"
    />
    <h3>Insulation and Walls</h3>
    <p>
      The next big step would be wall insulation, but before that I finished off
      any wiring mods which would run from the drivers cab to the back of the
      van (backup camera lines, and factory harness relocation).
    </p>
    <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/20.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/21.jpeg',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={true}
      thumbnailPosition="left"
    />
    <p>
      With the wires tucked into the wall panels, I started to cut and glue the
      patches of synthetic insulation onto the walls and into the wall voids. I
      used 3M 90 adhesive to help out on the trickier parts like the ceiling.
      Once every gap was stuffed with insulation I started to template out the
      shapes on the walls using extra 1/2" foam boards.
    </p>
    <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/22.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/23.jpeg',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={true}
      thumbnailPosition="left"
    />
    <p>
      I used the templates of foam to cut 1/4" sheets of plywood considering the
      shape of the walls and framing. I cut the garage bulkhead too, but for
      that I used 1/2" plywood for a little more sturdiness. This ended up being
      about 7 individual pieces that I painted white and coated in several
      layers of poly (for stain resistance). Poly onto paint is a little
      unconventional but I had a gallon of poly leftover from the floor job and
      a sprayer, so what the hell right?
    </p>
    <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/24.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/25.jpeg',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={true}
      thumbnailPosition="left"
    />
    <p>
      As far as mounting the walls, I was a little reluctant to put dozens of
      holes in the walls with screws. So, instead I used strips of 3M Dual-lock
      velcro onto the flat parts of the metal walls and the back of the panels.
      This stuff is insane. It's held up incredibly well and makes removing the
      wall panels (later in the process) super easy.
    </p>
    <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/26.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/27.jpeg',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={true}
      thumbnailPosition="left"
    />
    <h3>Insulation and Walls</h3>
    <p>
      The Lower cabinet was the next challenge. In a cramped space (40"x21") it
      needed to house a fridge, sink and plumbing, full solar electrical system,
      stove top, pots and pans, and all of my gadgets. There's nothing even
      close to this off the shelf so I decided wing it with some scrap plywood I
      had laying around and my known dimensions. No sophisticated joinery, just
      slapping a plywood box together, I figured it wouldn't work.
    </p>
    <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/28.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/29.jpeg',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={true}
      thumbnailPosition="left"
    />
    <p>
      Not too bad actually! I decided to move forward on this experiment by
      adding soft close hinges and drawer slides. At this point I was still not
      sure if this would work, but I tested all of my appliances and it fit like
      a glove! Not an inch to spare on any side.
    </p>
    <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/30.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/31.jpeg',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={true}
      thumbnailPosition="left"
    />
    <p>
      Pleasantly surprised that this worked, I reinforced the joints with
      L-brackets and added some finishing touches. The countertop is 2 pieces of
      1/2" ply glued together and the sink is a mixing bowl with pipe fittings
      from Home Depot. I was even able to add a fold-out desk to the side of the
      cabinet which makes working from the passenger swivel seat super easy. At
      the end, this hack-job came out great!
    </p>
    <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/32.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/33.jpeg',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={true}
      thumbnailPosition="left"
    />
    <p>
      As far as plumbing goes, my needs are very minimal so I decided to go with
      a cheap 12v powered water cooler dispenser. It has a long 1/4" tube that
      is like a straw that I can stick into any water tank. For drainage I use a
      3/4" pipe which I fit onto the bottom of the basin. These two tubes extend
      through the bulkhead and suck/drain through water tanks (usually (2) 5gal
      containers secured to a d-ring in the garage)
    </p>
    <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/34.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/35.jpeg',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={true}
      thumbnailPosition="left"
    />
    <p>
      Before the upper cabinets I wanted to figure out the ceiling situation. I
      decided to go with some *very cheap* cedar tongue-in-groove panels. I
      mounted them with a technique using "furring strips." This is basically
      oversized strips of plywood mounted to the ceiling ribs and long cedar
      panels brad nailed into them. We made sure to leave holes and wiring for
      the puck lights that would go in the ceiling later. It came out great, and
      this is one of my favorite features of the van.
    </p>
    <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/36.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/37.jpeg',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={true}
      thumbnailPosition="left"
    />
    <p>
      For upper cabinets I was a little more careful than previously. Since the
      lower was an odd shape and didn't have a lot of extra storage, I wanted to
      make the uppers as large as possible. I started by framing out a custom
      dimension with 1x2 pinewood, wood glue, and brad nails. I ended up with a
      pretty promising test fit.
    </p>
    <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/38.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/39.jpeg',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={true}
      thumbnailPosition="left"
    />
    <p>
      For mounting this cabinet, I used sheet metal screws similar to the ones
      used on the bed frame. I placed these mount points at safe to drill
      locations in the wall metal. I also put holes in the wall panel to
      accommodate these mounting points.
    </p>
    <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/40.jpeg',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={false}
      showThumbnails={false}
    />
    <p>
      I finished the cabinet with off-the-shelf hardware and paneled with
      plywood of various thicknesses (to accommodate the kitchen-spec hinges,
      very annoying). I left some spots to run extra puck lights and mounted it
      to the pre-drilled locations using sheet metal screws. Around this time I
      also finished off the garage bulkhead with a simple plywood door.
    </p>
    <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/41.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/42.jpeg',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={true}
      thumbnailPosition="left"
    />
    <h3>Appliances</h3>
    <p>
      This is the point where I made a pretty big design mistake. My goal was to
      have a removable "garage cabinet" which could house a tailgate shower,
      toilet, and extra fresh water when we didn't need the extra garage space.
      Unfortunately this first implementation had a few critical flaws and I had
      to scrap it in the end (after I built it, ugh).
    </p>
    <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/43.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/44.png',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={true}
      thumbnailPosition="left"
    />
    <p>
      The first flaw was weight balance. This initial design had my 30gal water
      tank on the driver side of the van which already boasted most of the
      weight (battery, cabinets, me). The next flaw was the sheer size of the
      thing. I had way overestimated how much space I had to work with in the
      garage and it turns out the dimensions of this cabinet made getting 1
      dirt-bike in nearly impossible. So it became firewood.
    </p>
    <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/45.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/46.jpeg',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={true}
      thumbnailPosition="left"
    />
    <p>
      So I scrapped this idea for a slimmer version that would serve the same
      purpose, but smaller and placed on the other side of the van. This version
      ended up being way easier to remove with the addition of wheels and
      handles. With this setup I can take either 2 dirt-bikes/5gals fresh
      water/no shower… or 1 dirt-bike/30gal fresh water/heated shower. To switch
      between the two I simply drain the tank, remove the wooden cabinet and
      replace the fresh water "straw" into 5gal container.
    </p>
    <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/47.png',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/48.jpeg',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={true}
      thumbnailPosition="left"
    />
    <p>
      For the toilet we use a C-head composting toilet. The toilet itself is
      tethered to a d-ring near the garage entry. To cut down on liquid waste
      bing carried, I created a drain hole near the bulkhead. The sink is able
      to divert waste water to this drain instead of going to the gray tank. We
      use only food products and biodegradable soap so we usually keep the drain
      open. In addition, dealing with the liquid waste in the toilet's catch is
      annoying, so we have a simple urinal plumbed into the floor drain as well.
    </p>
    <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/49.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/50.jpeg',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={true}
      thumbnailPosition="left"
    />
    <p>
      A few trips to the mountains made us realize that we really needed a cabin
      heater. I don't have space for propane, so I decided to go with a
      gasoline-powered heater which uses an auxiliary port from my vehicle's
      main tank. This was a tricky install since I had to fit it under the
      passenger seat and have clearance for the intake/exhaust pipes which would
      be under the van.
    </p>
    <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/51.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/52.jpeg',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={true}
      thumbnailPosition="left"
    />
    <p>
      The kit I used came with a flat mounting plate, and I formed a seal on
      either side of it with high heat silicone. For safety we also have a
      sensor for CO in the cabin. Once I installed the heater itself I set it
      for high altitude mode using a special controller and this thing works
      like a charm! Just set a temp on the thermostat and forget it!
    </p>
    <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/53.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/54.jpeg',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={true}
      thumbnailPosition="left"
    />
    <h3> Electronics</h3>
    <p>
      Since space is precious in this build, I decided to go with an all-in-one
      solution for the power system. It is a GoalZero Yeti 3000x and it slides
      nicely into the lower cabinet with a cutout for accessing the ports. There
      is a small 12v fusebox behind the battery which is the hub for all of the
      electronics (lights, fridge, heater, fan). I tried to keep everything in
      the van 12v so that I don't need to run the inverter for the day-to-day.
      For most A/C things I use a low profile extension cord which runs from
      here to the garage.
    </p>
    <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/55.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/56.jpeg',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={true}
      thumbnailPosition="left"
    />
    <p>
      At this point we had taken the van on some trips (partially finished) and
      we loved that we could stay powered off grid. Since this was such a high
      value-add I decided to add another 160W solar panel (of nearly identical
      voltage). This would bring the total solar input up to 360W which will
      supply well above what we use every day. In addition, I wired 2 GoalZero
      10A car chargers in parallel so we get about 240W when the vehicle is on
      in addition to the solar. For scale, we only use about 15% of the battery
      per day max. So to replenish it daily takes about 75min of sun, or 45min
      of sunny driving.
    </p>
    <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/57.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/58.jpeg',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={true}
      thumbnailPosition="left"
    />
    <p>
      In addition to the extra power we really valued a good cell-signal. I
      added a WeBoost 12v cell receiver to boost our chances of a good signal.
      This has a magnetic puck that sticks to the roof and a repeater puck which
      stays inside. When we have bad signal this can get us enough bars to watch
      Netflix.
    </p>
    <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/59.jpeg',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={false}
      showThumbnails={false}
    />
    <p>
      Everything else electronics-wise is somewhat removal depending on the type
      of trip. I like to add the small monitor when I want extra productivity
      working, or for watching movies/ps4 for example.
    </p>
    <ImageGallery
      items={[
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/60.jpeg',
        'https://adventure-head-photos.s3-us-west-2.amazonaws.com/van-build/61.jpeg',
      ].map((photo) => ({
        original: photo,
        thumbnail: photo,
      }))}
      showPlayButton={false}
      showBullets={true}
      thumbnailPosition="left"
    />
    <p>
      Check out the{' '}
      <Link className="link" to="/trips">
        trips section
      </Link>{' '}
      for more action shots of the van.
    </p>
  </Layout>
)

export default VanPage
